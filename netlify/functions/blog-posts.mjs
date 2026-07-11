import { getStore } from "@netlify/blobs";

const STORE_NAME = "eacc-blog-posts";
const INDEX_KEY = "posts-index";

const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers });
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function getAllowedEmails() {
  return String(process.env.BLOG_ADMIN_EMAILS || "")
    .split(",")
    .map(normalizeEmail)
    .filter(Boolean);
}

function isAdmin(request) {
  const email = normalizeEmail(request.headers.get("x-admin-email"));
  const token = String(request.headers.get("x-admin-token") || "");
  const adminToken = String(process.env.BLOG_ADMIN_TOKEN || "");
  const allowedEmails = getAllowedEmails();

  return Boolean(
    email &&
    token &&
    adminToken &&
    token === adminToken &&
    allowedEmails.includes(email)
  );
}

function text(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function slugify(value) {
  const slug = text(value, 90)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `post-${Date.now()}`;
}

function publicPost(post) {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    imageUrl: post.imageUrl || "",
    status: post.status,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt
  };
}

function adminPost(post) {
  return {
    ...publicPost(post),
    imageKey: post.imageKey || ""
  };
}

async function readPosts() {
  const store = getStore(STORE_NAME);
  const posts = await store.get(INDEX_KEY, { type: "json" });
  return Array.isArray(posts) ? posts : [];
}

async function savePosts(posts) {
  const store = getStore(STORE_NAME);
  await store.setJSON(INDEX_KEY, posts);
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  try {
    const url = new URL(request.url);
    const posts = await readPosts();
    const admin = isAdmin(request);

    if (request.method === "GET") {
      const includeAll = url.searchParams.get("all") === "true";
      const visiblePosts = posts
        .filter((post) => !post.deletedAt)
        .filter((post) => includeAll && admin ? true : post.status === "published")
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post) => includeAll && admin ? adminPost(post) : publicPost(post));

      if (includeAll && !admin) {
        return json({ message: "Admin access is required." }, 401);
      }

      return json({ posts: visiblePosts });
    }

    if (!admin) {
      return json({ message: "Admin access is required." }, 401);
    }

    if (request.method === "POST") {
      const body = await readJson(request);
      const title = text(body.title, 140);
      const description = text(body.description, 2400);
      const status = body.status === "published" ? "published" : "draft";
      const now = new Date().toISOString();

      if (!title || !description) {
        return json({ message: "Title and description are required." }, 400);
      }

      const post = {
        id: crypto.randomUUID(),
        slug: `${slugify(title)}-${Date.now()}`,
        title,
        description,
        imageUrl: text(body.imageUrl, 600),
        imageKey: text(body.imageKey, 300),
        status,
        createdAt: now,
        updatedAt: now
      };

      const nextPosts = [post, ...posts];
      await savePosts(nextPosts);
      return json({ post: publicPost(post) }, 201);
    }

    if (request.method === "PUT") {
      const body = await readJson(request);
      const id = text(body.id, 120);
      const index = posts.findIndex((post) => post.id === id && !post.deletedAt);

      if (index === -1) {
        return json({ message: "Post was not found." }, 404);
      }

      const title = text(body.title, 140);
      const description = text(body.description, 2400);

      if (!title || !description) {
        return json({ message: "Title and description are required." }, 400);
      }

      const updated = {
        ...posts[index],
        title,
        description,
        imageUrl: text(body.imageUrl, 600),
        imageKey: text(body.imageKey, 300),
        status: body.status === "published" ? "published" : "draft",
        updatedAt: new Date().toISOString()
      };

      posts[index] = updated;
      await savePosts(posts);
      return json({ post: publicPost(updated) });
    }

    if (request.method === "DELETE") {
      const body = await readJson(request);
      const id = text(body.id, 120);
      const index = posts.findIndex((post) => post.id === id && !post.deletedAt);

      if (index === -1) {
        return json({ message: "Post was not found." }, 404);
      }

      posts[index] = {
        ...posts[index],
        status: "archived",
        deletedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await savePosts(posts);
      return json({ ok: true });
    }

    return json({ message: "Method not allowed." }, 405);
  } catch (error) {
    return json({ message: "Blog service failed.", detail: error.message }, 500);
  }
}

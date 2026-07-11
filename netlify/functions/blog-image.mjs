import { getStore } from "@netlify/blobs";

const STORE_NAME = "eacc-blog-images";
const MAX_IMAGE_SIZE = 6 * 1024 * 1024;

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
  return Boolean(email && token && adminToken && token === adminToken && getAllowedEmails().includes(email));
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function safeName(name) {
  return String(name || "blog-image")
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  const store = getStore(STORE_NAME);

  if (request.method === "GET") {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
      return json({ message: "Image key is required." }, 400);
    }

    const result = await store.getWithMetadata(key, { type: "blob" });
    if (!result || !result.data) {
      return json({ message: "Image was not found." }, 404);
    }

    return new Response(result.data, {
      headers: {
        "content-type": result.metadata?.contentType || result.data.type || "application/octet-stream",
        "cache-control": "public, max-age=31536000, immutable"
      }
    });
  }

  if (request.method !== "POST") {
    return json({ message: "Method not allowed." }, 405);
  }

  if (!isAdmin(request)) {
    return json({ message: "Admin access is required." }, 401);
  }

  const form = await request.formData();
  const file = form.get("image");

  if (!file || typeof file === "string") {
    return json({ message: "Image file is required." }, 400);
  }

  if (!String(file.type || "").startsWith("image/")) {
    return json({ message: "Only image files are allowed." }, 400);
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return json({ message: "Image must be 6 MB or smaller." }, 400);
  }

  const key = `${Date.now()}-${crypto.randomUUID()}-${safeName(file.name)}`;
  await store.set(key, file, {
    metadata: {
      fileName: file.name,
      contentType: file.type,
      uploadedAt: new Date().toISOString()
    }
  });

  return json({
    imageKey: key,
    imageUrl: `/.netlify/functions/blog-image?key=${encodeURIComponent(key)}`
  }, 201);
}

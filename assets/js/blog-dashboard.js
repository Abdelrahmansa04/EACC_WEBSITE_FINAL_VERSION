(function () {
  var API = "/.netlify/functions/blog-posts";
  var IMAGE_API = "/.netlify/functions/blog-image";
  var authKey = "eaccBlogAdmin";
  var state = {
    posts: [],
    auth: getStoredAuth()
  };

  var adminGate = document.getElementById("adminGate");
  var dashboardShell = document.getElementById("dashboardShell");
  var loginForm = document.getElementById("loginForm");
  var loginMessage = document.getElementById("loginMessage");
  var postForm = document.getElementById("postForm");
  var postList = document.getElementById("adminPostList");
  var listMessage = document.getElementById("listMessage");
  var formMessage = document.getElementById("formMessage");
  var editorTitle = document.getElementById("editorTitle");
  var editorSubtitle = document.getElementById("editorSubtitle");
  var imagePreviewBox = document.getElementById("imagePreviewBox");
  var imagePreview = document.getElementById("imagePreview");
  var postImageInput = document.getElementById("postImage");
  var previewObjectUrl = "";

  function getStoredAuth() {
    try {
      return JSON.parse(sessionStorage.getItem(authKey)) || null;
    } catch {
      return null;
    }
  }

  function setStoredAuth(auth) {
    state.auth = auth;
    sessionStorage.setItem(authKey, JSON.stringify(auth));
  }

  function clearStoredAuth() {
    state.auth = null;
    sessionStorage.removeItem(authKey);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function authHeaders() {
    return {
      "content-type": "application/json",
      "x-admin-email": state.auth.email,
      "x-admin-token": state.auth.token
    };
  }

  function imageHeaders() {
    return {
      "x-admin-email": state.auth.email,
      "x-admin-token": state.auth.token
    };
  }

  function setMessage(target, message, isError) {
    target.textContent = message || "";
    target.classList.toggle("error", Boolean(isError));
  }

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function setImagePreview(src) {
    if (previewObjectUrl && previewObjectUrl !== src) {
      URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl = "";
    }

    if (src) {
      imagePreview.src = src;
      imagePreviewBox.classList.add("has-image");
      return;
    }

    imagePreview.removeAttribute("src");
    imagePreviewBox.classList.remove("has-image");
  }

  function showDashboard() {
    adminGate.hidden = true;
    dashboardShell.hidden = false;
  }

  function showGate() {
    adminGate.hidden = false;
    dashboardShell.hidden = true;
  }

  function resetEditor() {
    postForm.reset();
    document.getElementById("postId").value = "";
    document.getElementById("postSlug").value = "";
    document.getElementById("postSeoTitle").value = "";
    document.getElementById("postSeoDescription").value = "";
    document.getElementById("currentImageUrl").value = "";
    document.getElementById("currentImageKey").value = "";
    setImagePreview("");
    editorTitle.textContent = "Create post";
    editorSubtitle.textContent = "Write a new blog post and choose draft or published.";
    setMessage(formMessage, "");
  }

  function formatDate(value) {
    if (!value) return "";
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(new Date(value));
  }

  function renderPosts() {
    if (!state.posts.length) {
      postList.innerHTML = "";
      setMessage(listMessage, "No posts yet. Create the first one from the editor.");
      return;
    }

    setMessage(listMessage, "");
    postList.innerHTML = state.posts.map(function (post) {
      var image = post.imageUrl
        ? '<img src="' + escapeHtml(post.imageUrl) + '" alt="">'
        : "";

      return [
        '<article class="post-admin-card" data-id="' + escapeHtml(post.id) + '">',
        '<div class="post-admin-thumb">' + image + '</div>',
        '<div class="post-admin-content">',
        '<div class="post-admin-meta">',
        '<span class="status-pill ' + escapeHtml(post.status) + '">' + escapeHtml(post.status) + '</span>',
        '<span class="status-pill">' + formatDate(post.updatedAt || post.createdAt) + '</span>',
        '</div>',
        '<h3>' + escapeHtml(post.title) + '</h3>',
        '<p>' + escapeHtml(post.description) + '</p>',
        '<div class="mini-actions">',
        '<button class="mini-btn" type="button" data-action="edit">Edit</button>',
        '<button class="mini-btn danger" type="button" data-action="delete">Delete</button>',
        '</div>',
        '</div>',
        '</article>'
      ].join("");
    }).join("");
  }

  async function loadPosts() {
    setMessage(listMessage, "Loading posts...");
    var response = await fetch(API + "?all=true", { headers: authHeaders() });
    var data = await response.json();

    if (!response.ok) {
      clearStoredAuth();
      showGate();
      setMessage(loginMessage, data.message || "Admin access failed.", true);
      return;
    }

    state.posts = data.posts || [];
    showDashboard();
    renderPosts();
  }

  async function uploadImage(file) {
    if (!file) return null;

    var formData = new FormData();
    formData.append("image", file);

    var response = await fetch(IMAGE_API, {
      method: "POST",
      headers: imageHeaders(),
      body: formData
    });
    var data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Image upload failed.");
    }

    return data;
  }

  async function savePost(event) {
    event.preventDefault();
    setMessage(formMessage, "Saving post...");

    try {
      var id = document.getElementById("postId").value;
      var file = postImageInput.files[0];
      var image = await uploadImage(file);
      var title = document.getElementById("postTitle").value.trim();
      var description = document.getElementById("postDescription").value.trim();
      var payload = {
        id: id,
        title: title,
        slug: slugify(document.getElementById("postSlug").value || title),
        description: description,
        seoTitle: document.getElementById("postSeoTitle").value.trim(),
        seoDescription: document.getElementById("postSeoDescription").value.trim(),
        status: document.getElementById("postStatus").value,
        imageUrl: image ? image.imageUrl : document.getElementById("currentImageUrl").value,
        imageKey: image ? image.imageKey : document.getElementById("currentImageKey").value
      };

      var response = await fetch(API, {
        method: id ? "PUT" : "POST",
        headers: authHeaders(),
        body: JSON.stringify(payload)
      });
      var data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Post could not be saved.");
      }

      setMessage(formMessage, id ? "Post updated." : "Post created.");
      resetEditor();
      await loadPosts();
    } catch (error) {
      setMessage(formMessage, error.message, true);
    }
  }

  async function deletePost(id) {
    if (!confirm("Delete this post from the public blog and dashboard list?")) {
      return;
    }

    setMessage(listMessage, "Deleting post...");
    var response = await fetch(API, {
      method: "DELETE",
      headers: authHeaders(),
      body: JSON.stringify({ id: id })
    });
    var data = await response.json();

    if (!response.ok) {
      setMessage(listMessage, data.message || "Post could not be deleted.", true);
      return;
    }

    await loadPosts();
  }

  function editPost(id) {
    var post = state.posts.find(function (item) {
      return item.id === id;
    });

    if (!post) return;

    document.getElementById("postId").value = post.id;
    document.getElementById("postTitle").value = post.title;
    document.getElementById("postSlug").value = post.slug || "";
    document.getElementById("postDescription").value = post.description;
    document.getElementById("postSeoTitle").value = post.seoTitle || "";
    document.getElementById("postSeoDescription").value = post.seoDescription || "";
    document.getElementById("postStatus").value = post.status;
    document.getElementById("currentImageUrl").value = post.imageUrl || "";
    document.getElementById("currentImageKey").value = post.imageKey || "";
    postImageInput.value = "";
    setImagePreview(post.imageUrl || "");
    editorTitle.textContent = "Edit post";
    editorSubtitle.textContent = "Update the post details, image, or publish status.";
    window.scrollTo({ top: document.querySelector(".dashboard-panel").offsetTop - 110, behavior: "smooth" });
  }

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    setMessage(loginMessage, "Checking access...");
    setStoredAuth({
      email: document.getElementById("adminEmail").value.trim().toLowerCase(),
      token: document.getElementById("adminToken").value
    });
    await loadPosts();
  });

  postForm.addEventListener("submit", savePost);

  document.getElementById("resetEditor").addEventListener("click", resetEditor);

  document.getElementById("clearImage").addEventListener("click", function () {
    document.getElementById("currentImageUrl").value = "";
    document.getElementById("currentImageKey").value = "";
    postImageInput.value = "";
    setImagePreview("");
    setMessage(formMessage, "Image removed for this draft. Save the post to apply it.");
  });

  postImageInput.addEventListener("change", function () {
    var file = postImageInput.files[0];

    if (!file) {
      setImagePreview(document.getElementById("currentImageUrl").value);
      return;
    }

    previewObjectUrl = URL.createObjectURL(file);
    setImagePreview(previewObjectUrl);
    setMessage(formMessage, "Image ready to upload when you save.");
  });

  document.getElementById("logoutButton").addEventListener("click", function () {
    clearStoredAuth();
    showGate();
    resetEditor();
  });

  postList.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-action]");
    if (!button) return;

    var card = button.closest("[data-id]");
    var id = card && card.getAttribute("data-id");
    if (!id) return;

    if (button.getAttribute("data-action") === "edit") {
      editPost(id);
    } else {
      deletePost(id);
    }
  });

  if (state.auth) {
    loadPosts();
  }
})();

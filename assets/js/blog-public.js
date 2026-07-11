(function () {
  var grid = document.getElementById("blogGrid");
  var status = document.getElementById("blogStatus");
  var empty = document.getElementById("blogEmpty");

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatDate(value) {
    if (!value) return "EACC";
    return new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(new Date(value));
  }

  function renderPost(post) {
    var title = escapeHtml(post.title);
    var description = escapeHtml(post.description);
    var image = post.imageUrl
      ? '<div class="blog-card-media"><img src="' + escapeHtml(post.imageUrl) + '" alt="' + title + '"></div>'
      : "";

    return [
      '<article class="blog-card reveal ' + (post.imageUrl ? "" : "no-image") + '">',
      image,
      '<div class="blog-card-content">',
      '<div class="blog-card-meta"><span>' + formatDate(post.createdAt) + '</span><span>EACC Community</span></div>',
      '<h3 class="blog-card-title">' + title + '</h3>',
      '<p class="blog-card-description">' + description + '</p>',
      '</div>',
      '</article>'
    ].join("");
  }

  function revealCards() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -70px 0px" });

    document.querySelectorAll(".reveal").forEach(function (item) {
      observer.observe(item);
    });
  }

  async function loadPosts() {
    try {
      var response = await fetch("/.netlify/functions/blog-posts");
      var data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not load posts.");
      }

      status.hidden = true;

      if (!data.posts || !data.posts.length) {
        empty.hidden = false;
        revealCards();
        return;
      }

      grid.innerHTML = data.posts.map(renderPost).join("");
      grid.hidden = false;
      revealCards();
    } catch (error) {
      status.textContent = "The blog could not load right now. Please try again later.";
    }
  }

  loadPosts();
})();

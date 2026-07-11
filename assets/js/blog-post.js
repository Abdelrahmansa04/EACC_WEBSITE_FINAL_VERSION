(function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("slug");
  var status = document.getElementById("postStatus");
  var article = document.getElementById("postArticle");
  var heroTitle = document.getElementById("postHeroTitle");
  var heroMeta = document.getElementById("postHeroMeta");
  var postTitle = document.getElementById("postTitle");
  var postDescription = document.getElementById("postDescription");
  var postMeta = document.getElementById("postMeta");
  var imageWrap = document.getElementById("postImageWrap");
  var image = document.getElementById("postImage");

  function formatDate(value) {
    if (!value) return "EACC";
    return new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(new Date(value));
  }

  function setMeta(name, value) {
    var tag = document.querySelector('meta[name="' + name + '"]');
    if (tag) {
      tag.setAttribute("content", value);
    }
  }

  async function loadPost() {
    if (!slug) {
      status.textContent = "This blog post link is missing a slug.";
      heroTitle.textContent = "Post not found";
      heroMeta.textContent = "Return to the blog to choose another post.";
      return;
    }

    try {
      var response = await fetch("/.netlify/functions/blog-posts?slug=" + encodeURIComponent(slug));
      var data = await response.json();

      if (!response.ok || !data.post) {
        throw new Error(data.message || "Post was not found.");
      }

      var post = data.post;
      document.title = (post.seoTitle || post.title) + " | EACC Blog";
      setMeta("description", post.seoDescription || post.description);
      heroTitle.textContent = post.title;
      heroMeta.textContent = formatDate(post.createdAt) + " | EACC Community";
      postTitle.textContent = post.title;
      postDescription.textContent = post.description;
      postMeta.innerHTML = "<span>" + formatDate(post.createdAt) + "</span><span>EACC Community</span>";

      if (post.imageUrl) {
        image.src = post.imageUrl;
        image.alt = post.title;
        imageWrap.hidden = false;
      }

      status.hidden = true;
      article.hidden = false;
    } catch (error) {
      status.textContent = error.message || "The blog post could not load right now.";
      heroTitle.textContent = "Post not found";
      heroMeta.textContent = "Return to the blog to choose another post.";
    }
  }

  loadPost();
})();

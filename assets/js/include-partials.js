(() => {
  const includeScript = document.currentScript;
  const includeScriptSrc = includeScript ? includeScript.getAttribute('src') || '' : '';
  const getIncludeSlots = () => Array.from(document.querySelectorAll('[data-include]'));
  const ROOT_FOLDER_NAME = 'EACC_WEBSITE_FINAL_VERSION';
  const hasInclude = (name) =>
    getIncludeSlots().some((slot) => (slot.getAttribute('data-include') || '').includes(name));

  const getFileModeAssetPrefix = () => {
    if (window.location.protocol !== 'file:') return '';
    const parts = decodeURIComponent(window.location.pathname)
      .replace(/\\/g, '/')
      .split('/')
      .filter(Boolean);
    const rootIndex = parts.lastIndexOf(ROOT_FOLDER_NAME);
    if (rootIndex === -1) return '';
    const depthFromRoot = parts.length - rootIndex - 2;
    return depthFromRoot > 0 ? '../'.repeat(depthFromRoot) : '';
  };

  const toRuntimeAssetPath = (value) => {
    if (!value) return value;
    if (window.location.protocol !== 'file:') return value;
    const filePrefix = getFileModeAssetPrefix();

    if (value.startsWith('/assets/')) {
      return `${filePrefix}assets/${value.slice('/assets/'.length)}`;
    }
    return value;
  };

  const normalizeAssetUrlsForFileMode = () => {
    if (window.location.protocol !== 'file:') return;

    document.querySelectorAll('[src], [href]').forEach((el) => {
      ['src', 'href'].forEach((attr) => {
        const current = el.getAttribute(attr);
        if (!current) return;
        const next = toRuntimeAssetPath(current);
        if (next !== current) el.setAttribute(attr, next);
      });
    });

    document.querySelectorAll('[style]').forEach((el) => {
      const styleValue = el.getAttribute('style');
      if (!styleValue || styleValue.indexOf('/assets/') === -1) return;
      el.setAttribute('style', styleValue.replace(/\/assets\//g, `${getFileModeAssetPrefix()}assets/`));
    });
  };

  const removeLegacyGlobals = () => {
    if (hasInclude('global-loading-screen.html')) {
      document.querySelectorAll('#siteLoader, .site-loader').forEach((el) => el.remove());
    }

    if (hasInclude('global-navbar.html')) {
      const header = document.body ? document.body.querySelector('header') : null;
      if (header) header.remove();
    }

    if (hasInclude('global-footer.html')) {
      const footers = Array.from(document.querySelectorAll('footer.site-footer, footer'));
      footers.forEach((el) => el.remove());
    }
  };
  const fallbackPartials = {
    'partials/global-loading-screen.html': `
<div class="site-loader" id="siteLoader" aria-label="Loading website">
  <div class="loader-content">
    <img src="/assets/images/eacc-white-logo.png" alt="EACC Logo">
    <h2>Egyptian American Center</h2>
    <div class="loader-bar"></div>
  </div>
</div>`.trim(),
    'partials/global-navbar.html': `
<header>
  <div class="container navbar">
    <a href="/" class="logo" data-wix-link="/" data-local-link="index.html">
      <img src="/assets/images/eacc-white-logo.png" alt="EACC Logo">
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="/" data-wix-link="/" data-local-link="index.html"><span>Home</span></a>
      <div class="dropdown">
        <a href="/summer-camp-2026" data-wix-link="/summer-camp-2026" data-local-link="summer-camp-2026.html"><span>Summer Camp 2026</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="/summer-camp-2026#top" data-wix-link="/summer-camp-2026#top" data-local-link="summer-camp-2026.html#top">Overview</a>
          <a href="/summer-camp-2026#program" data-wix-link="/summer-camp-2026#program" data-local-link="summer-camp-2026.html#program">Programs & Activities</a>
          <a href="/summer-camp-2026#enroll" data-wix-link="/summer-camp-2026#enroll" data-local-link="summer-camp-2026.html#enroll">Schedule & Fees</a>
          <a href="/summer-camp-2026#partners" data-wix-link="/summer-camp-2026#partners" data-local-link="summer-camp-2026.html#partners">Previous Camps</a>
          <a href="/summer-camp-2026#summer-camp-faqs" data-wix-link="/summer-camp-2026#summer-camp-faqs" data-local-link="summer-camp-2026.html#summer-camp-faqs">Frequently Asked Questions</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="index.html#services"><span>Our Services</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="/language-academy" data-wix-link="/language-academy" data-local-link="Our Services/langauge-academy/language-acad.html">Language Academy</a>
          <a href="/kids-youth" data-wix-link="/kids-youth" data-local-link="Our Services/kids-youth.html">Kids & Youth Development Academy</a>
          <a href="/international-exams" data-wix-link="/international-exams" data-local-link="Our Services/international-exams.html">International Exam Preparation</a>
          <a href="/online-languages" data-wix-link="/online-languages" data-local-link="Our Services/online-lang.html">Online Language Center</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="/mindspace" data-wix-link="/mindspace" data-local-link="mindspace.html"><span>MindSpace</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="mindspace.html#about" data-wix-link="/mindspace#about" data-local-link="mindspace.html#about">About MindSpace</a>
          <a href="mindspace.html#services" data-wix-link="/mindspace#services" data-local-link="mindspace.html#services">Therapy Services</a>
          <a href="mindspace.html#assessment" data-wix-link="/mindspace#assessment" data-local-link="mindspace.html#assessment">Assessments</a>
          <a href="mindspace.html#family" data-wix-link="/mindspace#family" data-local-link="mindspace.html#family">Family Support</a>
          <a href="mindspace.html#family" data-wix-link="/mindspace#family" data-local-link="mindspace.html#family">Professional Workshops</a>
          <a href="/contact-us" data-wix-link="/contact-us" data-local-link="mindspace-form.html">Book an Appointment</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="/testing-centre" data-wix-link="/testing-centre" data-local-link="testing-centre.html"><span>Testing Center</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="/toefl" data-wix-link="/toefl" data-local-link="testing-centre/tofel.html">TOEFL</a>
          <a href="/celi-cils" data-wix-link="/celi-cils" data-local-link="testing-centre/celi-cils.html">CELI &amp; CILS</a>
          <a href="/contact-us" data-wix-link="/contact-us" data-local-link="testing-centre/placment-test.html">Placement Test</a>
          <a href="testing-centre/Psychological-assessment.html" data-wix-link="/psychological-assessment" data-local-link="testing-centre/Psychological-assessment.html">Psychological Assessment</a>
        </div>
      </div>
      <a href="/corporate-training" data-wix-link="/corporate-training" data-local-link="corporate-train.html">Corporate Training</a>
      <div class="dropdown">
        <a href="/who-we-are" data-wix-link="/who-we-are" data-local-link="about-us/our-story.html"><span>About</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="/who-we-are" data-wix-link="/who-we-are" data-local-link="about-us/our-story.html">Our Story</a>
          <a href="/leadership" data-wix-link="/leadership" data-local-link="about-us/leadership.html">Leadership Team</a>
          <a href="/partners" data-wix-link="/partners" data-local-link="about-us/partners.html">Partners &amp; Accreditations</a>
          <a href="/careers" data-wix-link="/careers" data-local-link="about-us/application.html">Careers</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="/contact-us" data-wix-link="/contact-us" data-local-link="contact-us/visit-our-centre.html"><span>Contact Us</span><i class="fa-solid fa-chevron-down"></i></a>
        <div class="dropdown-menu">
          <a href="/contact-us" data-wix-link="/contact-us" data-local-link="contact-us/visit-our-centre.html">Visit Our Center</a>
          <a href="/request-info" data-wix-link="/request-info" data-local-link="contact-us/request-info.html">Request Information</a>
          <a href="/book-consultation" data-wix-link="/book-consultation" data-local-link="contact-us/book-cons.html">Book a Consultation</a>
        </div>
      </div>
      <button type="button" class="language-toggle eacc-language-toggle notranslate" id="languageToggle" aria-label="Switch website language to Arabic" translate="no" data-no-translate>
        <i class="fa-solid fa-globe" aria-hidden="true"></i>
        <span id="languageToggleText">AR</span>
      </button>
      <div class="nav-cta-group">
        <div id="google_translate_element" aria-label="Google Translate language selector"></div>
        <a href="https://lms.eacc-egy.com/login.php" class="nav-lms" data-external-link="https://lms.eacc-egy.com/login.php" data-local-link="https://lms.eacc-egy.com/login.php">
          <i class="fa-solid fa-laptop" aria-hidden="true"></i>
          <span>LMS</span>
        </a>
      </div>
    </nav>
    <button type="button" class="mobile-toggle" id="mobileToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
      <span class="mobile-toggle-line"></span>
      <span class="mobile-toggle-line"></span>
      <span class="mobile-toggle-line"></span>
    </button>
  </div>
</header>`.trim(),
    'partials/global-footer.html': `
<footer class="site-footer">
  <div class="container footer-shell">
    <div class="footer-grid">
      <div class="footer-brand-block">
        <div class="footer-logo">
          <img src="/assets/images/eacc-white-logo.png" alt="EACC White Logo">
        </div>
        <h3>Empowering Minds. Building Futures.</h3>
        <p>Language, wellbeing, and future skills for every stage of life.</p>
        <div class="footer-social-inline">
          <a href="https://www.facebook.com/Egyptian.American.Center/" aria-label="Facebook" data-external-link="https://www.facebook.com/Egyptian.American.Center/" data-local-link="https://www.facebook.com/Egyptian.American.Center/"><img src="/assets/icons/facebook-icon.png" alt="" aria-hidden="true"></a>
          <a href="https://www.instagram.com/eacc.egypt/" aria-label="Instagram" data-external-link="https://www.instagram.com/eacc.egypt/" data-local-link="https://www.instagram.com/eacc.egypt/"><img src="/assets/icons/insta-icon.png" alt="" aria-hidden="true"></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" data-external-link="https://www.linkedin.com/" data-local-link="https://www.linkedin.com/"><img src="/assets/icons/linkidin-icon.png" alt="" aria-hidden="true"></a>
          <a href="https://www.youtube.com/" aria-label="YouTube" data-external-link="https://www.youtube.com/" data-local-link="https://www.youtube.com/"><img src="/assets/icons/youtube-icon.png" alt="" aria-hidden="true"></a>
          <a href="https://www.tiktok.com/" aria-label="TikTok" data-external-link="https://www.tiktok.com/" data-local-link="https://www.tiktok.com/"><img src="/assets/icons/tiktok-icon.png" alt="" aria-hidden="true"></a>
        </div>
        <p class="footer-closing">Helping learners and families grow with confidence since 1996.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <div class="footer-links">
          <a href="/summer-camp-2026" data-wix-link="/summer-camp-2026" data-local-link="summer-camp-2026.html">Summer Camp 2026</a>
          <a href="/mindspace" data-wix-link="/mindspace" data-local-link="mindspace.html">Mind Space by EACC</a>
          <a href="testing-centre.html" data-wix-link="/testing-centre" data-local-link="testing-centre.html">Authorized Testing Center</a>
          <a href="Our Services/online-lang.html" data-wix-link="/online-languages" data-local-link="Our Services/online-lang.html">Online Language Center</a>
          <a href="corporate-train.html" data-wix-link="/corporate-training" data-local-link="corporate-train.html">Corporate Training</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <div class="footer-links">
          <a href="https://lms.eacc-egy.com/login.php" data-external-link="https://lms.eacc-egy.com/login.php" data-local-link="https://lms.eacc-egy.com/login.php">LMS Login</a>
          <a href="/contact-us" data-wix-link="/contact-us" data-local-link="testing-centre/placment-test.html">Placement Test</a>
          <a href="/contact-us" data-wix-link="/contact-us" data-local-link="contact-us/book-cons.html#contact">Consultation Request</a>
        </div>
      </div>
      <div class="footer-col footer-office">
        <h4>Contact</h4>
        <div class="footer-links">
          <a href="https://www.google.com/maps/search/?api=1&amp;query=Alexandria%2C%20Egypt" data-external-link="https://www.google.com/maps/search/?api=1&amp;query=Alexandria%2C%20Egypt" data-local-link="https://www.google.com/maps/search/?api=1&amp;query=Alexandria%2C%20Egypt">Alexandria, Egypt</a>
          <a href="https://wa.me/201065533240" data-external-link="https://wa.me/201065533240" data-local-link="https://wa.me/201065533240">WhatsApp: +20 106 553 3240</a>
          <a href="mailto:info@eacc-egy.com">Email: info@eacc-egy.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Egyptian American Cultural Center. All rights reserved.</span>
      <span class="footer-bottom-links">
        <a href="/privacy-policy" data-wix-link="/privacy-policy" data-local-link="privacy.html">Privacy Policy</a>
        <a href="/terms-and-conditions" data-wix-link="/terms-and-conditions" data-local-link="terms.html">Terms &amp; Conditions</a>
        <a href="/refund" data-wix-link="/refund" data-local-link="refund.html">Refund Policy</a>
      </span>
    </div>
  </div>
</footer>`.trim()
  };
  const getFallbackPartial = (file) => {
    const normalized = String(file || '').replace(/\\/g, '/');
    if (normalized.endsWith('global-loading-screen.html')) {
      return fallbackPartials['partials/global-loading-screen.html'];
    }
    if (normalized.endsWith('global-navbar.html')) {
      return fallbackPartials['partials/global-navbar.html'];
    }
    if (normalized.endsWith('global-footer.html')) {
      return fallbackPartials['partials/global-footer.html'];
    }
    return null;
  };
  const unlockPage = () => {
    if (document.body) document.body.classList.remove('loading');
  };
  const forceHideLoader = () => {
    const loader = document.getElementById('siteLoader');
    if (loader) {
      loader.style.transition = 'opacity .45s ease, visibility .45s ease';
      loader.classList.add('hidden');
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      loader.style.pointerEvents = 'none';
    }
    unlockPage();
  };

  async function loadIncludes() {
    const includes = getIncludeSlots();
    await Promise.all(includes.map(async (slot) => {
      const file = slot.getAttribute('data-include');
      if (!file) return;

      try {
        const response = await fetch(file, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`Could not load ${file}`);
        slot.outerHTML = await response.text();
      } catch (error) {
        console.error(error);
        const fallback = getFallbackPartial(file);
        if (fallback) {
          slot.outerHTML = fallback;
        } else {
          slot.innerHTML = `<!-- Include failed: ${file}. Use a local server such as VS Code Live Server. -->`;
        }
      }
    }));
    normalizeAssetUrlsForFileMode();
    document.dispatchEvent(new CustomEvent('eacc:partials-loaded'));
  }

  function loadGlobalScripts() {
    if (window.__eaccGlobalScriptLoaded) return;
    window.__eaccGlobalScriptLoaded = true;
    const script = document.createElement('script');
    script.src = includeScriptSrc
      ? includeScriptSrc.replace(/include-partials\.js(?:\?.*)?$/i, 'global.js')
      : `${getFileModeAssetPrefix()}assets/js/global.js`;
    script.defer = true;
    script.addEventListener('error', () => {
      unlockPage();
      forceHideLoader();
    });
    script.addEventListener('load', () => {
      setTimeout(() => {
        unlockPage();
        forceHideLoader();
      }, 1400);
    });
    document.body.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      removeLegacyGlobals();
      loadIncludes().then(loadGlobalScripts).finally(() => {
        unlockPage();
        setTimeout(forceHideLoader, 700);
        setTimeout(forceHideLoader, 1500);
      });
    });
  } else {
    removeLegacyGlobals();
    loadIncludes().then(loadGlobalScripts).finally(() => {
      unlockPage();
      setTimeout(forceHideLoader, 700);
      setTimeout(forceHideLoader, 1500);
    });
  }

  window.addEventListener('pageshow', () => {
    setTimeout(forceHideLoader, 250);
  });

  window.addEventListener('load', () => {
    setTimeout(forceHideLoader, 250);
  });
})();








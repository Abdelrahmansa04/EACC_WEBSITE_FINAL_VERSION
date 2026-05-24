/* --- Extracted script block 1 --- */
(() => {
/* MOBILE NAV */

    const mobileToggle =
      document.getElementById('mobileToggle');

    const navLinks =
      document.getElementById('navLinks');

    const siteLoader =
      document.getElementById('siteLoader');

    const languageToggle =
      document.getElementById('languageToggle');

    const languageToggleText =
      document.getElementById('languageToggleText');

    const languageStorageKey = 'eacc-preferred-language-disabled';

    const menuLabels = {
      en: {
        open: 'Open menu',
        close: 'Close menu'
      },
      ar: {
        open: 'فتح القائمة',
        close: 'إغلاق القائمة'
      }
    };

    let currentLanguage = 'en';

    const translations = {
      ar: {
        'Egyptian American Center':'المركز المصري الأمريكي',
        'Home':'الرئيسية',
        'About Us':'من نحن',
        'Who We Are':'من نحن',
        'Explore Our Camps':'استكشف مخيماتنا',
        'FAQs':'الأسئلة الشائعة',
        'Programs':'البرامج',
        'Mind Space': 'مايند سبيس',
        'Testing': 'الاختبارات',
        'Corporate': 'التدريب المؤسسي',
        'About': 'عن المركز',
        'Contact':'تواصل معنا',
        'About Mind Space': 'عن مايند سبيس',
        'Therapy Services': 'خدمات العلاج',
        'Assessments': 'التقييمات',
        'Family Support': 'دعم الأسرة',
        'Book an Appointment': 'احجز موعد',
        'Authorized Testing Center': 'مركز اختبارات معتمد',
        'Placement Test':'اختبار تحديد المستوى',
        'Psychological Assessment': 'التقييم النفسي',
        'Kids &amp; Youth Academy': 'أكاديمية الأطفال والشباب',
        'Kids & Youth Academy': 'أكاديمية الأطفال والشباب',
        'English for Kids':'إنجليزي للأطفال',
        'Teen Programs': 'برامج المراهقين',
        'Robotics Lab': 'معمل الروبوتات',
        'Online Language Center': 'مركز اللغات أونلاين',
        'Workshops': 'ورش العمل',
        'Our Story': 'قصتنا',
        'Leadership Team': 'فريق القيادة',
        'Partners &amp; Accreditations': 'الشركاء والاعتمادات',
        'Partners & Accreditations': 'الشركاء والاعتمادات',
        'Careers': 'الوظائف',
        'FAQ': 'الأسئلة الشائعة',
        'Empowering Minds. Building Futures.': 'تمكين العقول. بناء المستقبل.',
        'Holistic Education. Lasting Impact.': 'تعليم متكامل. أثر دائم.',
        'Since 1996, the Egyptian American Cultural Center has guided more than 60,000 graduates toward stronger communication, greater confidence, and a global outlook through accredited language programs, international exam preparation, and professional development.': 'منذ عام 1996، ساعد المركز الثقافي المصري الأمريكي أكثر من 60,000 خريج على بناء تواصل أقوى وثقة أكبر ونظرة عالمية من خلال برامج لغوية معتمدة والتحضير للاختبارات الدولية والتطوير المهني.',
        'Expanding Our Offerings in 2026': 'توسيع خدماتنا في 2026',
        'Excellence today requires more than language proficiency alone. EACC is extending its services to support learners across academics, wellbeing, creativity, and technology.': 'التميز اليوم يحتاج أكثر من إتقان اللغة فقط. توسّع EACC خدماتها لدعم المتعلمين في الدراسة والرفاه النفسي والإبداع والتكنولوجيا.',
        'Integrated Pathways for Growth': 'مسارات متكاملة للنمو',
        'Complementing our language programs, new services in psychological wellbeing, robotics, and creative arts help children, youth, and adults build resilience, critical thinking, and the confidence to succeed long term.': 'إلى جانب برامج اللغات، تساعد خدمات جديدة في الرفاه النفسي والروبوتات والفنون الإبداعية الأطفال والشباب والكبار على بناء المرونة والتفكير النقدي والثقة للنجاح على المدى الطويل.',
        'Summer Camp 2026':'المخيم الصيفي 2026',
        'Languages':'اللغات',
        'Activities':'الأنشطة',
        'Preparation Courses':'دورات التحضير',
        'Contact':'تواصل معنا',
        'Apply Now':'قدّم الآن',
        'LMS Login': 'دخول LMS',
        'Unlock Your Future With Global Education Experiences':'افتح أبواب مستقبلك بتجارب تعليمية عالمية',
        'EACC empowers students through premium language programs, international camps, test preparation courses, and immersive educational experiences designed for future success.':'تمكّن EACC الطلاب عبر برامج لغوية متميزة ومعسكرات دولية ودورات تحضير وتجارب تعليمية ثرية مصممة لنجاح المستقبل.',
        'Explore Programs':'استكشف البرامج',
        'Contact Us':'تواصل معنا',
        'Why Students Choose EACC':'لماذا يختار الطلاب EACC',
        'More than 25 years of excellence in language education, cultural exchange, and international preparation programs.':'أكثر من 25 عامًا من التميز في تعليم اللغات والتبادل الثقافي وبرامج الإعداد الدولية.',
        'Thousands of Students':'آلاف الطلاب',
        'Trusted by learners from all age groups seeking premium education experiences.':'موثوق بها من متعلمين من جميع الفئات العمرية الباحثين عن تجارب تعليمية متميزة.',
        'Certified Programs':'برامج معتمدة',
        'Internationally recognized language and preparation courses.':'دورات لغات وتحضير معترف بها دوليًا.',
        'Global Opportunities':'فرص عالمية',
        'Prepare for study abroad, career growth, and global communication.':'استعد للدراسة بالخارج وتطور المسار المهني والتواصل العالمي.',
        'Flexible Learning':'تعلم مرن',
        'Study online or offline with adaptable modern learning methods.':'تعلّم أونلاين أو حضوريًا بطرق تعلم حديثة ومرنة.',
        'Learn More About EACC':'اعرف المزيد عن EACC',
        'Explore EACC learning experiences, from summer camps to languages, activities, and creative programs.':'استكشف تجارب التعلم في EACC، من المخيمات الصيفية إلى اللغات والأنشطة والبرامج الإبداعية.',
        'MyVoice summer experience for English, creativity, leadership, and confidence.':'تجربة MyVoice الصيفية للغة الإنجليزية والإبداع والقيادة والثقة.',
        'English, German, French, Italian, and Spanish programs for global communication.':'برامج الإنجليزية والألمانية والفرنسية والإيطالية والإسبانية للتواصل العالمي.',
        'Fine Arts and creative learning paths for expression, focus, and confidence.':'الفنون الجميلة ومسارات التعلم الإبداعي للتعبير والتركيز والثقة.',
        'Test Preparation':'تحضير الاختبارات',
        'Achieve your target scores through premium preparation programs.':'حقق الدرجات المستهدفة من خلال برامج تحضيرية متميزة.',
        'Flexible Study Modes':'أنظمة دراسة مرنة',
        'Adapt your learning journey through modern and flexible educational experiences.':'خصص رحلتك التعليمية عبر تجارب تعلم حديثة ومرنة.',
        'Group Classroom':'فصل جماعي',
        'Private Classroom':'فصل خاص',
        'Online Classes':'حصص أونلاين',
        'Private Online':'دروس أونلاين خاصة',
        'International Experiences':'تجارب دولية',
        'Summer & Winter Camps':'المخيمات الصيفية والشتوية',
        'Explore unforgettable educational journeys, cultural exchange experiences, and international camps with EACC.':'استكشف رحلات تعليمية لا تُنسى وتجارب تبادل ثقافي ومعسكرات دولية مع EACC.',
        'Explore Camps':'استكشف المخيمات',
        'Start Your Journey With EACC Today':'ابدأ رحلتك مع EACC اليوم',
        "Join one of Egypt's leading educational and language institutions.": 'انضم إلى واحدة من أبرز المؤسسات التعليمية واللغوية في مصر.',
        'Egyptian American Cultural Center offers premium language education, preparation courses, camps, and international learning experiences.':'يقدّم المركز الثقافي المصري الأمريكي تعليم لغات متميزاً، ودورات تحضيرية، ومخيمات، وتجارب تعليمية دولية.',
        '117 Ahmed Shawqi, Mustafa Kamel WA Bolkli, Sidi Gaber, Alexandria Governorate 5433141':'117 أحمد شوقي، مصطفى كامل وبولكلي، سيدي جابر، محافظة الإسكندرية 5433141',
        'About EACC': 'عن EACC',
        'Contact Page':'صفحة التواصل',
        'Terms & Conditions': 'الشروط والأحكام',
        'Privacy Policy': 'سياسة الخصوصية',
        'Our Courses':'دوراتنا',
        'Follow Us':'تابعنا',
        'Get Started': 'ابدأ الآن',
        'Location': 'الموقع',
        'LinkedIn': 'لينكدإن',
        'Testing Center': 'مركز الاختبارات',
        'Partners': 'الشركاء',
        'Language, wellbeing, and future skills for every stage of life.': 'اللغة والرفاه والمهارات المستقبلية لكل مرحلة من الحياة.',
        'Helping learners and families grow with confidence since 1996.': 'نساعد المتعلمين والأسر على النمو بثقة منذ 1996.',
        'Facebook':'فيسبوك',
        'Instagram':'إنستجرام',
        'Youtube':'يوتيوب',
        'YouTube':'يوتيوب',
        'WhatsApp': 'واتساب',
        'TikTok':'تيك توك',
        '© 2026 Egyptian American Cultural Center. All rights reserved.': '© 2026 Egyptian American Cultural Center. جميع الحقوق محفوظة.',
        'What Makes EACC Unique':'ما الذي يجعل EACC مميزاً',
        'Courses for All Ages':'دورات لكل الأعمار',
        '98% Exam Pass Rate':'نسبة نجاح 98% في الاختبارات',
        'Study Online or In Person':'ادرس أونلاين أو داخل المركز',
        'TOEFL Authorized Testing Center':'مركز اختبار TOEFL معتمد',
        "Kids' Summer Camps": 'المعسكرات الصيفية للأطفال',
        'Partnership with Think English': 'شراكة مع Think English',
        'Learning Platform for Practice':'منصة تعليمية للتدريب',
        'Find Your Path':'اختر مسارك',
        'What would you like to do with EACC?':'ماذا تريد أن تبدأ مع EACC؟',
        'Choose the learning route that fits your goal, then continue to the right page for details, schedules, admissions support, and the next available start date.':'اختر مسار التعلم المناسب لهدفك، ثم انتقل إلى الصفحة المناسبة لمعرفة التفاصيل والجداول ودعم القبول وأقرب موعد بداية.',
        'Learn a language':'تعلم لغة',
        'English, German, French, Italian, Spanish':'الإنجليزية، الألمانية، الفرنسية، الإيطالية، الإسبانية',
        'Prepare for exams':'استعد للاختبارات',
        'IELTS, TOEFL, OET, PTE': 'IELTS ? TOEFL ? OET ? PTE',
        'Choose study mode':'اختر نظام الدراسة',
        'Group, private, classroom, online':'مجموعات، خاص، داخل المركز، أونلاين',
        'Join Summer Camp':'انضم إلى المعسكر الصيفي',
        'MyVoice 2026 for children':'MyVoice 2026 للأطفال',
        'Explore Our Learning Pathways': 'استكشف مساراتنا التعليمية',
        'Choose from focused programs built for children, teens, adults, and learners preparing for global goals.': 'اختر من برامج مركزة مصممة للأطفال والمراهقين والبالغين والمتعلمين الذين يستعدون لأهداف عالمية.',
        'Prepare For International Exams': 'التحضير للاختبارات الدولية',
        'Build exam confidence through focused preparation programs and experienced instructors.': 'ابنِ ثقتك في الاختبارات عبر برامج تحضير مركزة ومدربين ذوي خبرة.',
        'View IELTS preparation course': 'عرض دورة تحضير IELTS',
        'View TOEFL preparation course': 'عرض دورة تحضير TOEFL',
        'View OET preparation course': 'عرض دورة تحضير OET',
        'View PTE preparation course': 'عرض دورة تحضير PTE',
        'Choose How You Study': 'اختر طريقة دراستك',
        'Match your schedule and learning style with classroom, private, and online study options.': 'طابق جدولك وأسلوب تعلمك مع خيارات الدراسة داخل الفصل، والدروس الخاصة، والتعلم أونلاين.',
        'Switch website language to English':'تبديل لغة الموقع إلى الإنجليزية',
        'Switch website language to Arabic':'تبديل لغة الموقع إلى العربية',
        'Open menu':'فتح القائمة',
        'Close menu':'إغلاق القائمة',
        'Home':'الرئيسية',
        'IELTS': 'IELTS',
        'TOEFL': 'TOEFL',
        'OET': 'OET',
        'PTE': 'PTE',
        'We provide language training and test preparation': 'نقدّم تدريبًا لغويًا والتحضير للاختبارات.',
        'Start Your Journey': 'ابدأ رحلتك',
        'View Course': 'عرض الكورس',
        'IELTS Preparation Course': 'دورة التحضير لاختبار IELTS',
        'TOEFL Preparation Course': 'دورة التحضير لاختبار TOEFL',
        'OET Preparation Course': 'دورة التحضير لاختبار OET',
        'PTE Preparation Course': 'دورة التحضير لاختبار PTE',
        'For students aiming for international exams': 'للطلاب الساعين إلى الاختبارات الدولية',
        'Professional instructors': 'مدربون محترفون',
        'Mock tests and practice materials': 'اختبارات تجريبية ومواد تدريب',
        'Flexible schedules': 'مواعيد مرنة',
        'One-on-one tutoring': 'متابعة فردية',
        'Group sessions': 'جلسات جماعية',
        'Online classes available': 'حصص أونلاين متاحة',
        'Contact for enrollment': 'تواصل للتسجيل',
        'Call us':'اتصل بنا',
        'Email us': 'راسلنا عبر البريد',
        'Visit our office': 'زر مكتبنا',
        'Get in Touch': 'تواصل معنا',
        'We would love to hear from you': 'يسعدنا التواصل معك',
        'Office Hours': 'ساعات العمل',
        'Saturday to Thursday': 'من السبت إلى الخميس',
        'Friday': 'الجمعة',
        'Closed': 'مغلق',
        'Send us a message': 'أرسل لنا رسالة',
        'Name': 'الاسم',
        'Email':'البريد الإلكتروني',
        'Message':'الرسالة',
        'Send': 'إرسال',
        'Thank you for your message': 'شكرًا لرسالتك',
        'We will get back to you soon': 'سنعود إليك قريبًا'
      }
    };

    const normalizeText = (value) =>
      value.replace(/\s+/g, ' ').trim();

    const translatableTextNodes = [];

    const collectTranslatableText = () => {

      const walker =
        document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode(node) {

              const parentTag =
                node.parentElement?.tagName;

              const text =
                normalizeText(node.nodeValue || '');

              if (!text || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) {
                return NodeFilter.FILTER_REJECT;
              }

              return translations.ar[text]
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_REJECT;

            }
          }
        );

      while (walker.nextNode()) {

        const node =
          walker.currentNode;

        translatableTextNodes.push({
          node,
          en: normalizeText(node.nodeValue || '')
        });

      }

    };

    const updateMobileMenuLabel = () => {

      const isOpen =
        navLinks.classList.contains('active');

      mobileToggle.setAttribute(
        'aria-label',
        isOpen
          ? menuLabels[currentLanguage].close
          : menuLabels[currentLanguage].open
      );

    };

    const getStoredLanguage = () => {

      try {
        return localStorage.getItem(languageStorageKey);
      } catch (error) {
        return null;
      }

    };

    const saveLanguage = (language) => {

      try {
        localStorage.setItem(languageStorageKey, language);
      } catch (error) {
        /* Language switching still works when storage is unavailable. */
      }

    };

    const applyLanguage = (language) => {

      currentLanguage =
        language === 'ar' ? 'ar' : 'en';

      document.documentElement.lang =
        currentLanguage;

      document.documentElement.dir =
        currentLanguage === 'ar' ? 'rtl' : 'ltr';

      translatableTextNodes.forEach(({ node, en }) => {

        node.nodeValue =
          currentLanguage === 'ar'
            ? translations.ar[en]
            : en;

      });

      languageToggleText.textContent =
        currentLanguage === 'ar' ? 'EN' : 'AR';

      languageToggle.setAttribute(
        'aria-label',
        currentLanguage === 'ar'
          ? 'Switch website language to English'
          : 'Switch website language to Arabic'
      );

      updateMobileMenuLabel();

      saveLanguage(currentLanguage);

    };

    collectTranslatableText();

    applyLanguage('en');

    languageToggle.addEventListener('click', () => {

      applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar');

    });

    window.addEventListener('load', () => {

      setTimeout(() => {

        if (siteLoader) {
          siteLoader.classList.add('hidden');
          siteLoader.style.opacity = '0';
          siteLoader.style.visibility = 'hidden';
          siteLoader.style.pointerEvents = 'none';
        }
        if (document.body) {
          document.body.classList.remove('loading');
        }

      }, 650);

    });

    const header =
      document.querySelector('header');

    const logoImg =
      document.querySelector('.logo img');

    const rootFolderName = 'EACC_WEBSITE_FINAL_VERSION';
    const getAssetPrefix = () => {
      if (window.location.protocol !== 'file:') return '/';
      const parts = decodeURIComponent(window.location.pathname)
        .replace(/\\/g, '/')
        .split('/')
        .filter(Boolean);
      const rootIndex = parts.lastIndexOf(rootFolderName);
      if (rootIndex === -1) return '/';
      const depthFromRoot = parts.length - rootIndex - 2;
      return depthFromRoot > 0 ? '../'.repeat(depthFromRoot) : '';
    };

    const assetPrefix = getAssetPrefix();
    const defaultLogo =
      `${assetPrefix}assets/images/eacc-blue-logo.png`;

    const whiteLogo =
      `${assetPrefix}assets/images/eacc-white-logo.png`;

    const updateHeaderState = () => {

      const isScrolled =
        window.scrollY > 30;

      header.classList.toggle('scrolled', isScrolled);

      logoImg.src =
        isScrolled ? defaultLogo : whiteLogo;

    };

    updateHeaderState();

    window.addEventListener('scroll', updateHeaderState);

    const setMobileMenuState = (isOpen) => {

      navLinks.classList.toggle('active', isOpen);
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      updateMobileMenuLabel();

      if (!isOpen) {
        navLinks.querySelectorAll('.dropdown.open')
          .forEach(dropdown => dropdown.classList.remove('open'));
      }

    };

    mobileToggle.addEventListener('click', () => {

      setMobileMenuState(!navLinks.classList.contains('active'));

    });

    const closeMobileDropdowns = (exceptDropdown = null) => {

      navLinks.querySelectorAll('.dropdown.open')
        .forEach(dropdown => {

          if (dropdown !== exceptDropdown) {
            dropdown.classList.remove('open');
          }

        });

    };

    navLinks.addEventListener('click', event => {

      const dropdownTrigger =
        event.target.closest('.dropdown > a');

      const isMobileMenu =
        window.matchMedia('(max-width: 1240px)').matches;

      if (dropdownTrigger && isMobileMenu) {

        const dropdown =
          dropdownTrigger.closest('.dropdown');

        event.preventDefault();

        const willOpen =
          !dropdown.classList.contains('open');

        closeMobileDropdowns(dropdown);

        dropdown.classList.toggle('open', willOpen);

        return;

      }

      const link =
        event.target.closest('a');

      if (link) {

        closeMobileDropdowns();
        setMobileMenuState(false);

      }

    });

    /* HERO SLIDER */

    const slides =
      document.querySelectorAll('.slide');

    let currentSlide = 0;

    slides.forEach((slide, index) => {

      slide.classList.toggle('active', index === 0);

    });

    setInterval(() => {

      slides[currentSlide]
        .classList.remove('active');

      currentSlide =
        (currentSlide + 1) % slides.length;

      slides[currentSlide]
        .classList.add('active');

    }, 7000);
})();


/* --- Extracted script block 2 id="eacc-premium-interaction-script" --- */
(() => {
(function(){
  'use strict';
  if (window.__eaccPremiumInteraction) return;
  window.__eaccPremiumInteraction = true;

  var progress = document.querySelector('.scroll-progress');
  if (!progress) {
    progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);
  }
  function updateProgress(){
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = Math.min(100, Math.max(0, window.scrollY / max * 100)) + '%';
  }
  updateProgress();
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress);

  var revealTargets = document.querySelectorAll('.section-title,.feature-card,.program-card,.prep-card,.activity-card,.study-card,.cta-box,.experience-card,.footer-col,.footer-about');
  revealTargets.forEach(function(el, index){
    el.classList.add('eacc-reveal');
    el.style.transitionDelay = Math.min(index % 6 * 55, 260) + 'ms';
  });
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } });
  }, {threshold:.14, rootMargin:'0px 0px -70px 0px'});
  revealTargets.forEach(function(el){ revealObserver.observe(el); });

  var cards = document.querySelectorAll('.feature-card,.prep-card,.program-card,.study-card,.activity-card');
  cards.forEach(function(card){
    card.addEventListener('pointermove', function(event){
      if (window.matchMedia('(max-width: 768px)').matches) return;
      var rect = card.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width;
      var y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--tilt-y', ((x - .5) * 7).toFixed(2) + 'deg');
      card.style.setProperty('--tilt-x', ((.5 - y) * 7).toFixed(2) + 'deg');
      card.style.setProperty('--glare-x', (x * 100).toFixed(1) + '%');
      card.style.setProperty('--glare-y', (y * 100).toFixed(1) + '%');
    });
    card.addEventListener('pointerleave', function(){
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
      card.style.removeProperty('--glare-x');
      card.style.removeProperty('--glare-y');
    });
  });

  var hero = document.querySelector('.hero');
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  if (hero && slides.length > 1 && !document.querySelector('.hero-controls')) {
    var controls = document.createElement('div');
    controls.className = 'hero-controls';

    var dots = slides.map(function(slide, index){
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'hero-dot';
      dot.setAttribute('aria-label','Show hero slide ' + (index + 1));
      dot.addEventListener('click', function(){
        slides.forEach(function(item){ item.classList.remove('active'); });
        slide.classList.add('active');
        syncDots();
      });
      controls.appendChild(dot);
      return dot;
    });

    hero.appendChild(controls);
    function syncDots(){
      var active = Math.max(0, slides.findIndex(function(slide){ return slide.classList.contains('active'); }));
      dots.forEach(function(dot, index){ dot.classList.toggle('active', index === active); });
    }
    var mutation = new MutationObserver(syncDots);
    slides.forEach(function(slide){ mutation.observe(slide, {attributes:true, attributeFilter:['class']}); });

    syncDots();
  }

})();
})();


/* --- Extracted script block 3 id="eacc-translation-controller-v2" --- */
(() => {
/*
  EACC Translation Controller v2
  --------------------------------
  Purpose:
  - Keeps English as the source copy in the HTML.
  - Translates visible text, image alt text, aria-labels, titles, and placeholders to Arabic.
  - Stores the visitor's language choice in localStorage.
  - Exposes a small debug API:
      window.EACC_TRANSLATION.setLanguage('ar' | 'en')
      window.EACC_TRANSLATION.getMissingTranslations()
      window.EACC_TRANSLATIONS.enToAr
  Future maintenance:
  - Add any new English text as a key in window.EACC_TRANSLATIONS.enToAr.
  - Keep keys normalized exactly as the text appears to users after whitespace is collapsed.
*/
(function () {
  'use strict';

  var STORAGE_KEY = 'eacc-preferred-language';
  var LEGACY_STORAGE_KEYS = [
    'eacc-preferred-language-disabled',
    'eacc-lang',
    'eaccLanguage',
    'preferredLanguage'
  ];

  window.EACC_TRANSLATIONS = window.EACC_TRANSLATIONS || {};
  window.EACC_TRANSLATIONS.enToAr = {
    "Egyptian American Center": "المركز المصري الأمريكي",
    "Home": "الرئيسية",
    "Summer Camp 2026": "المخيم الصيفي 2026",
    "Overview": "نظرة عامة",
    "Programs & Activities": "البرامج والأنشطة",
    "Schedule & Fees": "المواعيد والرسوم",
    "Previous Camps": "المعسكرات السابقة",
    "Frequently Asked Questions": "الأسئلة الشائعة",
    "Our Services": "خدماتنا",
    "Language Academy": "أكاديمية اللغات",
    "Kids & Youth Development Academy": "أكاديمية تنمية الأطفال والشباب",
    "International Exam Preparation": "التحضير للاختبارات الدولية",
    "Online Language Center": "مركز اللغات أونلاين",
    "MindSpace": "مايند سبيس",
    "About MindSpace": "عن مايند سبيس",
    "Therapy Services": "خدمات العلاج",
    "Assessments": "التقييمات",
    "Family Support": "دعم الأسرة",
    "Professional Workshops": "ورش عمل احترافية",
    "Book an Appointment": "احجز موعد",
    "Testing Center": "مركز الاختبارات",
    "TOEFL": "TOEFL",
    "CELI & CILS": "CELI و CILS",
    "Placement Test": "اختبار تحديد المستوى",
    "Psychological Assessment": "التقييم النفسي",
    "Corporate Training": "التدريب المؤسسي",
    "About": "عن المركز",
    "Our Story": "قصتنا",
    "Leadership Team": "فريق القيادة",
    "Partners & Accreditations": "الشركاء والاعتمادات",
    "Careers": "الوظائف",
    "FAQs": "الأسئلة الشائعة",
    "Contact Us": "تواصل معنا",
    "Visit Our Center": "زر مركزنا",
    "Request Information": "طلب معلومات",
    "Book a Consultation": "احجز استشارة",
    "AR": "AR",
    "LMS": "دخول LMS",
    "Contact": "تواصل معنا",
    "LMS Login": "دخول LMS",
    "FAQ": "الأسئلة الشائعة",
    "Terms & Conditions": "الشروط والأحكام",
    "Privacy Policy": "سياسة الخصوصية",
    "Refund Policy": "سياسة الاسترداد",
    "Loading website": "جاري تحميل الموقع",
    "EACC Logo": "شعار EACC",
    "Switch website language to Arabic": "تبديل لغة الموقع إلى العربية",
    "Switch website language to English": "تبديل لغة الموقع إلى الإنجليزية",
    "Open menu": "فتح القائمة",
    "Close menu": "إغلاق القائمة",
    "Chat with EACC on WhatsApp": "تواصل مع EACC على واتساب",
    "Empowering Minds. Building Futures.": "تمكين العقول. بناء المستقبل.",
    "Egyptian American Cultural Center": "المركز الثقافي المصري الأمريكي",
    "Since 1996, the Egyptian American Cultural Center has guided more than 60,000 graduates toward stronger communication, greater confidence, and a global outlook through accredited language programs, international exam preparation, and professional development.": "منذ عام 1996، وجّه المركز الثقافي المصري الأمريكي أكثر من 60,000 خريج نحو تواصل أقوى، وثقة أكبر، ونظرة عالمية من خلال برامج لغوية معتمدة، والتحضير للاختبارات الدولية، والتطوير المهني.",
    "Expanding Our Offerings in 2026": "توسيع خدماتنا في 2026",
    "Excellence today requires more than language proficiency alone. EACC is extending its services to support learners across academics, wellbeing, creativity, and technology.": "التميز اليوم يتطلب أكثر من إتقان اللغة فقط. تعمل EACC على توسيع خدماتها لدعم المتعلمين في المجالات الأكاديمية، والرفاه النفسي، والإبداع، والتكنولوجيا.",
    "Integrated Pathways for Growth": "مسارات متكاملة للنمو",
    "Complementing our language programs, new services in psychological wellbeing, robotics, and creative arts help children, youth, and adults build resilience, critical thinking, and the confidence to succeed long term.": "استكمالًا لبرامجنا اللغوية، تساعد الخدمات الجديدة في الرفاه النفسي، والروبوتات، والفنون الإبداعية الأطفال والشباب والبالغين على بناء المرونة، والتفكير النقدي، والثقة للنجاح على المدى الطويل.",
    "Explore Services": "استكشف الخدمات",
    "Enroll Now": "سجل الآن",
    "Language opens doors. Wellbeing builds resilience. Technology develops future skills. Creativity inspires innovation.": "اللغة تفتح الأبواب. الرفاه يبني المرونة. التكنولوجيا تطور مهارات المستقبل. الإبداع يلهم الابتكار.",
    "Summer Camp 2026 activities": "أنشطة المخيم الصيفي 2026",
    "Now Enrolling: Summer Camp 2026": "التسجيل مفتوح الآن: المخيم الصيفي 2026",
    "A dynamic summer experience combining English, robotics, arts, and engaging activities for children and teens.": "تجربة صيفية ديناميكية تجمع بين الإنجليزية، والروبوتات، والفنون، وأنشطة تفاعلية للأطفال والمراهقين.",
    "Learn More": "اعرف المزيد",
    "Mind Space by EACC logo": "شعار Mind Space by EACC",
    "Mind Space by EACC": "مايند سبيس من EACC",
    "Psychological therapy, assessments, and family support for children, youth, and adults.": "علاج نفسي، وتقييمات، ودعم أسري للأطفال والشباب والبالغين.",
    "Robotics and creative workshops": "ورش الروبوتات والإبداع",
    "Robotics Lab & Expressive Studios": "معمل الروبوتات واستوديوهات الفنون التعبيرية",
    "Hands-on robotics, creative expression, and workshops that build confidence, creativity, and future skills.": "تطبيق عملي في الروبوتات، وتعبير إبداعي، وورش تبني الثقة والإبداع ومهارات المستقبل.",
    "Authorized testing services": "خدمات اختبارات معتمدة",
    "Authorized Testing Center": "مركز اختبارات معتمد",
    "Official registration for TOEFL, CILS, and CELI exams, placement tests, and psychological assessments.": "تسجيل رسمي لاختبارات TOEFL وCILS وCELI واختبارات تحديد المستوى والتقييمات النفسية.",
    "Book Your Test": "احجز اختبارك",
    "Established in 1996, EACC has supported 60,000+ graduates since 1996, serves as an Authorized TOEFL, CILS & CELI Testing Center, is powered by 80+ educators and specialists, and is part of Future Education Holding.": "منذ تأسيسها في 1996، دعمت EACC أكثر من 60,000 خريج، وتعمل كمركز اختبارات معتمد لـ TOEFL وCILS وCELI، ويقودها أكثر من 80 معلّمًا ومتخصصًا، وهي جزء من Future Education Holding.",
    "Registration Now Open": "التسجيل متاح الآن",
    "My Voice Summer Camp 2026": "المخيم الصيفي My Voice 2026",
    "A transformational summer experience where children and teens build confidence, strengthen their English, explore robotics and creative expression, and discover their unique voice.": "تجربة صيفية تحويلية يبني فيها الأطفال والمراهقون الثقة، ويطوّرون لغتهم الإنجليزية، ويستكشفون الروبوتات والتعبير الإبداعي، ويكتشفون صوتهم الخاص.",
    "Personalized Assessments": "تقييمات مخصصة",
    "Robotics": "الروبوتات",
    "Expressive Arts": "الفنون التعبيرية",
    "Field Trips": "رحلات ميدانية",
    "Adventure Camp": "مخيم المغامرة",
    "Parent Club": "نادي أولياء الأمور",
    "Final Showcase": "العرض الختامي",
    "Explore My Voice Summer Camp 2026": "استكشف مخيم My Voice الصيفي 2026",
    "Register for Summer Camp": "سجل في المخيم الصيفي",
    "Limited seats available.": "الأماكن محدودة.",
    "Featured Services": "الخدمات المميزة",
    "Discover the Service That Fits Your Goals": "اكتشف الخدمة المناسبة لأهدافك",
    "Whether you are looking for language training, international testing, psychological support, online learning, or customized corporate solutions, EACC offers trusted services designed to help you succeed.": "سواء كنت تبحث عن تدريب لغوي، أو اختبارات دولية، أو دعم نفسي، أو تعلم أونلاين، أو حلول مؤسسية مخصصة، تقدم EACC خدمات موثوقة مصممة لمساعدتك على النجاح.",
    "Language Academy programs": "برامج أكاديمية اللغات",
    "Structured language programs for school, work, study, travel, and everyday communication.": "برامج لغوية منظمة للمدرسة والعمل والدراسة والسفر والتواصل اليومي.",
    "Explore Language Academy": "استكشف أكاديمية اللغات",
    "Kids and youth development programs": "برامج تنمية الأطفال والشباب",
    "English for kids, robotics lab, teen programs, and workshops that develop confidence and future skills.": "إنجليزي للأطفال، ومعمل روبوتات، وبرامج للمراهقين، وورش تطوّر الثقة ومهارات المستقبل.",
    "Explore Kids & Youth Academy": "استكشف أكاديمية الأطفال والشباب",
    "Therapy services, assessments, family support, and professional workshops.": "خدمات علاج، وتقييمات، ودعم أسري، وورش احترافية.",
    "Explore Mind Space": "استكشف Mind Space",
    "Testing center services": "خدمات مركز الاختبارات",
    "TOEFL, CILS, CELI, placement tests, and psychological assessments.": "TOEFL وCILS وCELI واختبارات تحديد المستوى والتقييمات النفسية.",
    "Explore Testing Services": "استكشف خدمات الاختبارات",
    "Online language learning": "تعلم اللغات أونلاين",
    "A focused landing point for flexible online language services and learner support.": "نقطة انطلاق مركزة لخدمات لغوية مرنة أونلاين ودعم المتعلمين.",
    "Explore Online Learning": "استكشف التعلم أونلاين",
    "Corporate training classroom": "قاعة التدريب المؤسسي",
    "Customized language, communication, and professional development programs for organizations.": "برامج مخصصة في اللغة والتواصل والتطوير المهني للمؤسسات.",
    "Explore Corporate Training": "استكشف التدريب المؤسسي",
    "Why Choose EACC": "لماذا تختار EACC",
    "What Makes EACC Unique": "ما الذي يجعل EACC مميزة",
    "EACC combines trusted educational experience with new academic, wellbeing, creative, and technology pathways for learners at every stage of life.": "تجمع EACC بين الخبرة التعليمية الموثوقة ومسارات جديدة أكاديمية ونفسية وإبداعية وتقنية للمتعلمين في كل مراحل الحياة.",
    "EACC students learning in class": "طلاب EACC يتعلمون داخل الفصل",
    "Language Expertise": "خبرة لغوية",
    "Clear placement, strong instruction, and practical communication pathways for children, teens, and adults.": "تحديد مستوى واضح، وتعليم قوي، ومسارات تواصل عملية للأطفال والمراهقين والبالغين.",
    "Courses for students of different ages": "دورات لطلاب من أعمار مختلفة",
    "Whole-Learner Support": "دعم شامل للمتعلم",
    "Mind Space services help families and learners build confidence, resilience, and clarity.": "تساعد خدمات Mind Space الأسر والمتعلمين على بناء الثقة والمرونة والوضوح.",
    "Student using an online learning platform": "طالب يستخدم منصة تعليم أونلاين",
    "Technology for Learning": "التكنولوجيا من أجل التعلم",
    "LMS access, online learning options, robotics, and digital practice support modern learning habits.": "الوصول إلى LMS وخيارات التعلم أونلاين والروبوتات والتدريب الرقمي تدعم عادات تعلم حديثة.",
    "TOEFL authorized testing center": "مركز اختبار TOEFL معتمد",
    "Official Testing": "اختبارات رسمية",
    "Authorized testing and assessment services create a trusted entry point for learners.": "توفر خدمات الاختبارات والتقييمات المعتمدة نقطة انطلاق موثوقة للمتعلمين.",
    "Success Stories": "قصص النجاح",
    "Real Results. Meaningful Impact.": "نتائج حقيقية. أثر ملموس.",
    "For nearly three decades, Egyptian American Cultural Center has helped learners, families, and organizations achieve their goals through education, assessment, and personal development.": "على مدار ما يقارب ثلاثة عقود، ساعد المركز الثقافي المصري الأمريكي المتعلمين والأسر والمؤسسات على تحقيق أهدافهم من خلال التعليم والتقييم والتطوير الشخصي.",
    "Language Confidence": "ثقة لغوية",
    "Students move from placement to practical communication through guided instruction, feedback, and consistent practice.": "ينتقل الطلاب من تحديد المستوى إلى التواصل العملي عبر توجيه تعليمي وتغذية راجعة وتدريب منتظم.",
    "Families gain clearer pathways for children and teens through assessment, counseling, and development-focused programs.": "تحصل الأسر على مسارات أوضح للأطفال والمراهقين عبر التقييم والإرشاد وبرامج تركز على التطوير.",
    "Organizational Growth": "نمو المؤسسات",
    "Teams benefit from targeted training that connects language, communication, and professional performance.": "تستفيد الفرق من تدريب موجه يربط بين اللغة والتواصل والأداء المهني.",
    "Trusted Partnerships. International Standards.": "شراكات موثوقة. معايير دولية.",
    "Egyptian American Cultural Center works with respected educational institutions and authorized testing organizations to deliver internationally recognized services and assessments.": "يتعاون المركز الثقافي المصري الأمريكي مع مؤسسات تعليمية مرموقة وجهات اختبارات معتمدة لتقديم خدمات وتقييمات معترف بها دوليًا.",
    "TOEFL logo": "شعار TOEFL",
    "Authorized Testing Organization": "جهة اختبارات معتمدة",
    "Academic Group": "مجموعة أكاديمية",
    "Notting Hill College logo": "شعار Notting Hill College",
    "Academic Partner": "شريك أكاديمي",
    "Think English logo": "شعار Think English",
    "Think English": "Think English",
    "Eton Academy logo": "شعار Eton Academy",
    "Partner Universities": "جامعات شريكة",
    "Institutional Network": "شبكة مؤسسية",
    "View Our Partners": "شاهد شركاءنا",
    "Start Your Learning Journey with EACC": "ابدأ رحلتك التعليمية مع EACC",
    "Whether you want to improve your language skills, prepare for an international exam, support your child's development, access psychological services, or advance your organization, EACC is here to help you achieve your goals.": "سواء أردت تحسين مهاراتك اللغوية، أو التحضير لاختبار دولي، أو دعم تطور طفلك، أو الاستفادة من الخدمات النفسية، أو تطوير مؤسستك، فـ EACC هنا لمساعدتك على تحقيق أهدافك.",
    "Our team is ready to help you choose the service that best fits your needs.": "فريقنا جاهز لمساعدتك في اختيار الخدمة الأنسب لاحتياجاتك.",
    "EACC White Logo": "شعار EACC الأبيض",
    "Language, wellbeing, and future skills for every stage of life.": "اللغة والرفاه ومهارات المستقبل لكل مرحلة من مراحل الحياة.",
    "Helping learners and families grow with confidence since 1996.": "نساعد المتعلمين والأسر على النمو بثقة منذ 1996.",
    "Explore": "استكشف",
    "Resources": "الموارد",
    "Consultation Request": "طلب استشارة",
    "Alexandria, Egypt": "الإسكندرية، مصر",
    "WhatsApp: +20 106 553 3240": "واتساب: +20 106 553 3240",
    "Email: info@eacc-egy.com": "البريد الإلكتروني: info@eacc-egy.com",
    "© 2026 Egyptian American Cultural Center. All rights reserved.": "© 2026 Egyptian American Cultural Center. جميع الحقوق محفوظة."
  };

  var dictionary = window.EACC_TRANSLATIONS.enToAr;
  var state = {
    language: 'en',
    textItems: [],
    attrItems: [],
    explicitItems: [],
    missing: new Set()
  };

  var SKIP_SELECTOR = 'script, style, noscript, iframe, svg, canvas, video, audio, [data-no-translate]';
  var ATTRIBUTES_TO_TRANSLATE = ['alt', 'aria-label', 'title', 'placeholder'];

  function normalize(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function translate(value) {
    var key = normalize(value);
    if (!key) return null;
    return dictionary[key] || null;
  }

  function shouldSkipElement(element) {
    return !element || (element.closest && element.closest(SKIP_SELECTOR));
  }

  function rememberMissing(value) {
    var key = normalize(value);
    if (key && !dictionary[key] && !/^\d+$/.test(key)) {
      state.missing.add(key);
    }
  }

  function collectExplicitItems() {
    document.querySelectorAll('[data-en]').forEach(function (element) {
      if (shouldSkipElement(element)) return;
      var english = normalize(element.getAttribute('data-en') || element.textContent);
      var arabic = normalize(element.getAttribute('data-ar') || translate(english));
      if (english && arabic) {
        state.explicitItems.push({ element: element, en: english, ar: arabic });
      } else {
        rememberMissing(english);
      }
    });
  }

  function collectTextNodes() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          if (shouldSkipElement(parent) || (parent.closest && parent.closest('[data-en]'))) {
            return NodeFilter.FILTER_REJECT;
          }
          var english = normalize(node.nodeValue);
          if (!english) return NodeFilter.FILTER_REJECT;

          var arabic = translate(english);
          if (arabic) return NodeFilter.FILTER_ACCEPT;

          rememberMissing(english);
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    var node;
    while ((node = walker.nextNode())) {
      state.textItems.push({
        node: node,
        en: node.nodeValue,
        normalizedEn: normalize(node.nodeValue),
        ar: translate(node.nodeValue)
      });
    }
  }

  function collectAttributes() {
    document.querySelectorAll('*').forEach(function (element) {
      if (shouldSkipElement(element)) return;

      ATTRIBUTES_TO_TRANSLATE.forEach(function (attribute) {
        var english = element.getAttribute(attribute);
        if (!english) return;

        var arabic = translate(english);
        if (arabic) {
          state.attrItems.push({
            element: element,
            attribute: attribute,
            en: english,
            ar: arabic
          });
        } else {
          rememberMissing(english);
        }
      });
    });
  }

  function updateDocumentMeta(language) {
    var isArabic = language === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    document.title = isArabic
      ? 'EACC | المركز الثقافي المصري الأمريكي'
      : 'EACC | Egyptian American Cultural Center';

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        isArabic
          ? 'يقدم المركز الثقافي المصري الأمريكي تعليم لغات متميزًا، ومخيمات، وبرامج تحضير للاختبارات، وتجارب تعلم تفاعلية.'
          : 'Egyptian American Cultural Center offers premium language education, camps, test preparation programs, and immersive learning experiences.'
      );
    }

    if (document.body) {
      document.body.classList.toggle('is-arabic', isArabic);
    }
  }

  function updateLanguageButtons(language) {
    var isArabic = language === 'ar';
    document.querySelectorAll('.language-toggle, .eacc-language-toggle').forEach(function (button) {
      button.classList.add('eacc-language-toggle');
      button.setAttribute('type', 'button');
      button.setAttribute(
        'aria-label',
        isArabic ? 'Switch website language to English' : 'Switch website language to Arabic'
      );
      button.innerHTML = '<span class="eacc-lang-label">' + (isArabic ? 'EN' : 'AR') + '</span>';
    });
  }

  function updateMenuLabels(language) {
    var mobileToggle = document.getElementById('mobileToggle');
    if (!mobileToggle) return;

    var isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (language === 'ar') {
      mobileToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
    } else {
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      LEGACY_STORAGE_KEYS.forEach(function (key) { localStorage.removeItem(key); });
    } catch (error) {
      // Language switching still works when browser storage is blocked.
    }
  }

  function readSavedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;

      for (var i = 0; i < LEGACY_STORAGE_KEYS.length; i += 1) {
        var legacy = localStorage.getItem(LEGACY_STORAGE_KEYS[i]);
        if (legacy === 'ar' || legacy === 'en') return legacy;
      }
    } catch (error) {
      // Fall back to English.
    }
    return 'en';
  }

  function setLanguage(language, options) {
    var nextLanguage = language === 'ar' ? 'ar' : 'en';
    var shouldSave = !options || options.save !== false;

    state.language = nextLanguage;
    updateDocumentMeta(nextLanguage);

    state.explicitItems.forEach(function (item) {
      item.element.textContent = nextLanguage === 'ar' ? item.ar : item.en;
    });

    state.textItems.forEach(function (item) {
      item.node.nodeValue = nextLanguage === 'ar' ? item.ar : item.en;
    });

    state.attrItems.forEach(function (item) {
      item.element.setAttribute(item.attribute, nextLanguage === 'ar' ? item.ar : item.en);
    });

    updateLanguageButtons(nextLanguage);
    updateMenuLabels(nextLanguage);

    if (shouldSave) saveLanguage(nextLanguage);

    document.dispatchEvent(new CustomEvent('eacc:languagechange', {
      detail: { language: nextLanguage }
    }));
  }

  function init() {
    state.textItems = [];
    state.attrItems = [];
    state.explicitItems = [];
    state.missing = new Set();

    collectExplicitItems();
    collectTextNodes();
    collectAttributes();

    setLanguage(readSavedLanguage(), { save: false });

    if (state.missing.size && window.console && console.info) {
      console.info('[EACC translation] Missing optional translations:', Array.from(state.missing));
    }
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('.language-toggle, .eacc-language-toggle');
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    setLanguage(state.language === 'ar' ? 'en' : 'ar');
  }, true);

  window.EACC_TRANSLATION = {
    setLanguage: setLanguage,
    getLanguage: function () { return state.language; },
    getMissingTranslations: function () { return Array.from(state.missing); },
    refresh: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
})();


/* --- Extracted script block 4 id="eacc-wix-navigation-bridge" --- */
(() => {
(function(){
  'use strict';
  function isLocalPreview(){
    return window.location.protocol==='file:'||
      window.location.hostname==='localhost'||
      window.location.hostname==='127.0.0.1';
  }
  function navigateLocal(href){
    if(!href)return;
    if(/^https?:\/\//i.test(href)){
      window.location.href=href;
      return;
    }
    window.location.href=href;
  }
  document.addEventListener('click',function(event){
    var link=event.target.closest&&event.target.closest('a[data-wix-link],a[data-external-link]');
    if(!link)return;
    var href=link.getAttribute('data-wix-link')||link.getAttribute('data-external-link');
    var local=link.getAttribute('data-local-link');
    if(!href&&!local)return;
    event.preventDefault();
    if(isLocalPreview()){
      navigateLocal(local||href);
      return;
    }
    if(window.parent&&window.parent!==window){
      window.parent.postMessage({type:'EACC_NAVIGATE',href:href},'*');
      return;
    }
    navigateLocal(href||local);
  });
})();
})();


/* --- Extracted script block 5 id="eacc-wix-nav-bridge" --- */
(() => {
(function () {
  if (window.__eaccWixBridgeInstalled) return;
  window.__eaccWixBridgeInstalled = true;
  var slugMap = {
    'index': '/',
    'corporate-train': '/corporate-training',
    'testing-centre': '/testing-centre',
    'summer-camp-2026': '/summer-camp-2026',
    'mindspace': '/mindspace',
    'mindspace-form': '/mindspace',
    'contactus': '/contact-us',
    'contact-us': '/contact-us',
    'request-info': '/request-info',
    'book-cons': '/book-consultation',
    'book-consultation': '/book-consultation',
    'application': '/application',
    'careers': '/careers',
    'career': '/careers',
    'faq': '/faq',
    'terms': '/terms-and-conditions',
    'terms-conditions': '/terms-and-conditions',
    'terms-and-conditions': '/terms-and-conditions',
    'privacy': '/privacy-policy',
    'privacy-policy': '/privacy-policy',
    'refund': '/refund',
    'language-acad': '/language-academy',
    'language-academy': '/language-academy',
    'lang-form': '/language-form',
    'language-form': '/language-form',
    'eng': '/english',
    'adults': '/english-adults',
    'youth': '/english-youth',
    'kids': '/english-kids',
    'german': '/german',
    'french': '/french',
    'italian': '/italian',
    'spanish': '/spanish',
    'international-exams': '/international-exams',
    'int-exams': '/international-exams',
    'ielts': '/ielts',
    'tofel': '/toefl',
    'toefl': '/toefl',
    'oet': '/oet',
    'pte': '/pte',
    'celi-cils': '/celi-cils',
    'celi': '/celi',
    'cils': '/cils',
    'placment-test': '/placement-test',
    'placement-test': '/placement-test',
    'psychological-assessment': '/psychological-assessment',
    'who-we-are': '/who-we-are',
    'our-story': '/who-we-are',
    'leadership': '/leadership',
    'partners': '/partners',
    'visit-our-centre': '/contact-us',
    'online-lang': '/online-languages',
    'online-languages': '/online-languages',
    'kids-youth': '/kids-youth',
    'kids-youth-academy': '/kids-youth',
    'robotics': '/robotics',
    'workshops': '/kids-youth'
  };
  function fromHrefToRoute(href) {
    if (!href) return '';
    href = String(href).trim();
    if (!href) return '';
    if (href.indexOf('javascript:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('#') === 0) {
      return '';
    }
    if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
      if (href.indexOf('wixstudio.com/eacc-refactor/') > -1) return href;
      return href;
    }
    if (href.charAt(0) === '/') {
      return href;
    }
    var clean = href.split('#')[0].split('?')[0].replace(/\\/g, '/');
    var parts = clean.split('/');
    var file = parts[parts.length - 1] || '';
    var base = file.replace(/\.html?$/i, '').toLowerCase();
    if (slugMap[base]) return slugMap[base];
    if (base) return '/' + base;
    return '';
  }
  function resolveRoute(a) {
    var wix = (a.getAttribute('data-wix-link') || '').trim();
    if (wix) {
      if (wix.charAt(0) === '/' || wix.indexOf('http://') === 0 || wix.indexOf('https://') === 0) return wix;
      if (wix.indexOf('.html') > -1) return fromHrefToRoute(wix);
    }
    var href = a.getAttribute('href') || '';
    return fromHrefToRoute(href);
  }
  function normalizeInternalLinks() {
    var anchors = document.querySelectorAll('a[href], a[data-local-link], a[data-wix-link]');
    anchors.forEach(function(a){
      var route = resolveRoute(a);
      if (route && route.charAt(0) === '/') {
        a.setAttribute('data-wix-link', route);
      }
    });
  }
  document.addEventListener('click', function (event) {
    var a = event.target && event.target.closest ? event.target.closest('a') : null;
    if (!a) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    var route = resolveRoute(a);
    if (!route) return;
    event.preventDefault();
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'EACC_NAVIGATE', href: route }, '*');
      } else {
        window.location.href = route;
      }
    } catch (e) {
      window.location.href = route;
    }
  }, true);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', normalizeInternalLinks);
  } else {
    normalizeInternalLinks();
  }
})();
})();




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
        open: 'ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©',
        close: 'Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©'
      }
    };

    let currentLanguage = 'en';

    const translations = {
      ar: {
        'Egyptian American Center':'Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ',
        'Home':'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
        'About Us':'Ù…Ù† Ù†Ø­Ù†',
        'Who We Are':'Ù…Ù† Ù†Ø­Ù†',
        'Explore Our Camps':'Ø§Ø³ØªÙƒØ´Ù Ù…Ø®ÙŠÙ…Ø§ØªÙ†Ø§',
        'FAQs':'Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©',
        'Programs':'Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬',
        'Mind Space': 'Ù…Ø§ÙŠÙ†Ø¯ Ø³Ø¨ÙŠØ³',
        'Testing': 'Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª',
        'Corporate': 'Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ',
        'About': 'Ø¹Ù† Ø§Ù„Ù…Ø±ÙƒØ²',
        'Contact':'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§',
        'About Mind Space': 'Ø¹Ù† Ù…Ø§ÙŠÙ†Ø¯ Ø³Ø¨ÙŠØ³',
        'Therapy Services': 'Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¹Ù„Ø§Ø¬',
        'Assessments': 'Ø§Ù„ØªÙ‚ÙŠÙŠÙ…Ø§Øª',
        'Family Support': 'Ø¯Ø¹Ù… Ø§Ù„Ø£Ø³Ø±Ø©',
        'Book an Appointment': 'Ø§Ø­Ø¬Ø² Ù…ÙˆØ¹Ø¯',
        'Authorized Testing Center': 'Ù…Ø±ÙƒØ² Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯',
        'Placement Test':'Ø§Ø®ØªØ¨Ø§Ø± ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³ØªÙˆÙ‰',
        'Psychological Assessment': 'Ø§Ù„ØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ù†ÙØ³ÙŠ',
        'Kids &amp; Youth Academy': 'Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨',
        'Kids & Youth Academy': 'Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨',
        'English for Kids':'Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„',
        'Teen Programs': 'Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ†',
        'Robotics Lab': 'Ù…Ø¹Ù…Ù„ Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª',
        'Online Language Center': 'Ù…Ø±ÙƒØ² Ø§Ù„Ù„ØºØ§Øª Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†',
        'Workshops': 'ÙˆØ±Ø´ Ø§Ù„Ø¹Ù…Ù„',
        'Our Story': 'Ù‚ØµØªÙ†Ø§',
        'Leadership Team': 'ÙØ±ÙŠÙ‚ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©',
        'Partners &amp; Accreditations': 'Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ ÙˆØ§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª',
        'Partners & Accreditations': 'Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ ÙˆØ§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª',
        'Careers': 'Ø§Ù„ÙˆØ¸Ø§Ø¦Ù',
        'FAQ': 'Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©',
        'Empowering Minds. Building Futures.': 'ØªÙ…ÙƒÙŠÙ† Ø§Ù„Ø¹Ù‚ÙˆÙ„. Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.',
        'Holistic Education. Lasting Impact.': 'ØªØ¹Ù„ÙŠÙ… Ù…ØªÙƒØ§Ù…Ù„. Ø£Ø«Ø± Ø¯Ø§Ø¦Ù….',
        'Since 1996, the Egyptian American Cultural Center has guided more than 60,000 graduates toward stronger communication, greater confidence, and a global outlook through accredited language programs, international exam preparation, and professional development.': 'Ù…Ù†Ø° Ø¹Ø§Ù… 1996ØŒ Ø³Ø§Ø¹Ø¯ Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ Ø£ÙƒØ«Ø± Ù…Ù† 60,000 Ø®Ø±ÙŠØ¬ Ø¹Ù„Ù‰ Ø¨Ù†Ø§Ø¡ ØªÙˆØ§ØµÙ„ Ø£Ù‚ÙˆÙ‰ ÙˆØ«Ù‚Ø© Ø£ÙƒØ¨Ø± ÙˆÙ†Ø¸Ø±Ø© Ø¹Ø§Ù„Ù…ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø¨Ø±Ø§Ù…Ø¬ Ù„ØºÙˆÙŠØ© Ù…Ø¹ØªÙ…Ø¯Ø© ÙˆØ§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¯ÙˆÙ„ÙŠØ© ÙˆØ§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ù‡Ù†ÙŠ.',
        'Expanding Our Offerings in 2026': 'ØªÙˆØ³ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙÙŠ 2026',
        'Excellence today requires more than language proficiency alone. EACC is extending its services to support learners across academics, wellbeing, creativity, and technology.': 'Ø§Ù„ØªÙ…ÙŠØ² Ø§Ù„ÙŠÙˆÙ… ÙŠØ­ØªØ§Ø¬ Ø£ÙƒØ«Ø± Ù…Ù† Ø¥ØªÙ‚Ø§Ù† Ø§Ù„Ù„ØºØ© ÙÙ‚Ø·. ØªÙˆØ³Ù‘Ø¹ EACC Ø®Ø¯Ù…Ø§ØªÙ‡Ø§ Ù„Ø¯Ø¹Ù… Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙÙŠ Ø§Ù„Ø¯Ø±Ø§Ø³Ø© ÙˆØ§Ù„Ø±ÙØ§Ù‡ Ø§Ù„Ù†ÙØ³ÙŠ ÙˆØ§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§.',
        'Integrated Pathways for Growth': 'Ù…Ø³Ø§Ø±Ø§Øª Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ù„Ù†Ù…Ùˆ',
        'Complementing our language programs, new services in psychological wellbeing, robotics, and creative arts help children, youth, and adults build resilience, critical thinking, and the confidence to succeed long term.': 'Ø¥Ù„Ù‰ Ø¬Ø§Ù†Ø¨ Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù„ØºØ§ØªØŒ ØªØ³Ø§Ø¹Ø¯ Ø®Ø¯Ù…Ø§Øª Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ Ø§Ù„Ø±ÙØ§Ù‡ Ø§Ù„Ù†ÙØ³ÙŠ ÙˆØ§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª ÙˆØ§Ù„ÙÙ†ÙˆÙ† Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨ ÙˆØ§Ù„ÙƒØ¨Ø§Ø± Ø¹Ù„Ù‰ Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø±ÙˆÙ†Ø© ÙˆØ§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù†Ù‚Ø¯ÙŠ ÙˆØ§Ù„Ø«Ù‚Ø© Ù„Ù„Ù†Ø¬Ø§Ø­ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„.',
        'Summer Camp 2026':'Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ 2026',
        'Languages':'Ø§Ù„Ù„ØºØ§Øª',
        'Activities':'Ø§Ù„Ø£Ù†Ø´Ø·Ø©',
        'Preparation Courses':'Ø¯ÙˆØ±Ø§Øª Ø§Ù„ØªØ­Ø¶ÙŠØ±',
        'Contact':'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§',
        'Apply Now':'Ù‚Ø¯Ù‘Ù… Ø§Ù„Ø¢Ù†',
        'LMS Login': 'Ø¯Ø®ÙˆÙ„ LMS',
        'Unlock Your Future With Global Education Experiences':'Ø§ÙØªØ­ Ø£Ø¨ÙˆØ§Ø¨ Ù…Ø³ØªÙ‚Ø¨Ù„Ùƒ Ø¨ØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø¹Ø§Ù„Ù…ÙŠØ©',
        'EACC empowers students through premium language programs, international camps, test preparation courses, and immersive educational experiences designed for future success.':'ØªÙ…ÙƒÙ‘Ù† EACC Ø§Ù„Ø·Ù„Ø§Ø¨ Ø¹Ø¨Ø± Ø¨Ø±Ø§Ù…Ø¬ Ù„ØºÙˆÙŠØ© Ù…ØªÙ…ÙŠØ²Ø© ÙˆÙ…Ø¹Ø³ÙƒØ±Ø§Øª Ø¯ÙˆÙ„ÙŠØ© ÙˆØ¯ÙˆØ±Ø§Øª ØªØ­Ø¶ÙŠØ± ÙˆØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø«Ø±ÙŠØ© Ù…ØµÙ…Ù…Ø© Ù„Ù†Ø¬Ø§Ø­ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.',
        'Explore Programs':'Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬',
        'Contact Us':'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§',
        'Why Students Choose EACC':'Ù„Ù…Ø§Ø°Ø§ ÙŠØ®ØªØ§Ø± Ø§Ù„Ø·Ù„Ø§Ø¨ EACC',
        'More than 25 years of excellence in language education, cultural exchange, and international preparation programs.':'Ø£ÙƒØ«Ø± Ù…Ù† 25 Ø¹Ø§Ù…Ù‹Ø§ Ù…Ù† Ø§Ù„ØªÙ…ÙŠØ² ÙÙŠ ØªØ¹Ù„ÙŠÙ… Ø§Ù„Ù„ØºØ§Øª ÙˆØ§Ù„ØªØ¨Ø§Ø¯Ù„ Ø§Ù„Ø«Ù‚Ø§ÙÙŠ ÙˆØ¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©.',
        'Thousands of Students':'Ø¢Ù„Ø§Ù Ø§Ù„Ø·Ù„Ø§Ø¨',
        'Trusted by learners from all age groups seeking premium education experiences.':'Ù…ÙˆØ«ÙˆÙ‚ Ø¨Ù‡Ø§ Ù…Ù† Ù…ØªØ¹Ù„Ù…ÙŠÙ† Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙØ¦Ø§Øª Ø§Ù„Ø¹Ù…Ø±ÙŠØ© Ø§Ù„Ø¨Ø§Ø­Ø«ÙŠÙ† Ø¹Ù† ØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø©.',
        'Certified Programs':'Ø¨Ø±Ø§Ù…Ø¬ Ù…Ø¹ØªÙ…Ø¯Ø©',
        'Internationally recognized language and preparation courses.':'Ø¯ÙˆØ±Ø§Øª Ù„ØºØ§Øª ÙˆØªØ­Ø¶ÙŠØ± Ù…Ø¹ØªØ±Ù Ø¨Ù‡Ø§ Ø¯ÙˆÙ„ÙŠÙ‹Ø§.',
        'Global Opportunities':'ÙØ±Øµ Ø¹Ø§Ù„Ù…ÙŠØ©',
        'Prepare for study abroad, career growth, and global communication.':'Ø§Ø³ØªØ¹Ø¯ Ù„Ù„Ø¯Ø±Ø§Ø³Ø© Ø¨Ø§Ù„Ø®Ø§Ø±Ø¬ ÙˆØªØ·ÙˆØ± Ø§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ù…Ù‡Ù†ÙŠ ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ.',
        'Flexible Learning':'ØªØ¹Ù„Ù… Ù…Ø±Ù†',
        'Study online or offline with adaptable modern learning methods.':'ØªØ¹Ù„Ù‘Ù… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† Ø£Ùˆ Ø­Ø¶ÙˆØ±ÙŠÙ‹Ø§ Ø¨Ø·Ø±Ù‚ ØªØ¹Ù„Ù… Ø­Ø¯ÙŠØ«Ø© ÙˆÙ…Ø±Ù†Ø©.',
        'Learn More About EACC':'Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯ Ø¹Ù† EACC',
        'Explore EACC learning experiences, from summer camps to languages, activities, and creative programs.':'Ø§Ø³ØªÙƒØ´Ù ØªØ¬Ø§Ø±Ø¨ Ø§Ù„ØªØ¹Ù„Ù… ÙÙŠ EACCØŒ Ù…Ù† Ø§Ù„Ù…Ø®ÙŠÙ…Ø§Øª Ø§Ù„ØµÙŠÙÙŠØ© Ø¥Ù„Ù‰ Ø§Ù„Ù„ØºØ§Øª ÙˆØ§Ù„Ø£Ù†Ø´Ø·Ø© ÙˆØ§Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ©.',
        'MyVoice summer experience for English, creativity, leadership, and confidence.':'ØªØ¬Ø±Ø¨Ø© MyVoice Ø§Ù„ØµÙŠÙÙŠØ© Ù„Ù„ØºØ© Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© ÙˆØ§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙˆØ§Ù„Ù‚ÙŠØ§Ø¯Ø© ÙˆØ§Ù„Ø«Ù‚Ø©.',
        'English, German, French, Italian, and Spanish programs for global communication.':'Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© ÙˆØ§Ù„Ø£Ù„Ù…Ø§Ù†ÙŠØ© ÙˆØ§Ù„ÙØ±Ù†Ø³ÙŠØ© ÙˆØ§Ù„Ø¥ÙŠØ·Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø¥Ø³Ø¨Ø§Ù†ÙŠØ© Ù„Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ.',
        'Fine Arts and creative learning paths for expression, focus, and confidence.':'Ø§Ù„ÙÙ†ÙˆÙ† Ø§Ù„Ø¬Ù…ÙŠÙ„Ø© ÙˆÙ…Ø³Ø§Ø±Ø§Øª Ø§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠ Ù„Ù„ØªØ¹Ø¨ÙŠØ± ÙˆØ§Ù„ØªØ±ÙƒÙŠØ² ÙˆØ§Ù„Ø«Ù‚Ø©.',
        'Test Preparation':'ØªØ­Ø¶ÙŠØ± Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª',
        'Achieve your target scores through premium preparation programs.':'Ø­Ù‚Ù‚ Ø§Ù„Ø¯Ø±Ø¬Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‡Ø¯ÙØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø¨Ø±Ø§Ù…Ø¬ ØªØ­Ø¶ÙŠØ±ÙŠØ© Ù…ØªÙ…ÙŠØ²Ø©.',
        'Flexible Study Modes':'Ø£Ù†Ø¸Ù…Ø© Ø¯Ø±Ø§Ø³Ø© Ù…Ø±Ù†Ø©',
        'Adapt your learning journey through modern and flexible educational experiences.':'Ø®ØµØµ Ø±Ø­Ù„ØªÙƒ Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø¹Ø¨Ø± ØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„Ù… Ø­Ø¯ÙŠØ«Ø© ÙˆÙ…Ø±Ù†Ø©.',
        'Group Classroom':'ÙØµÙ„ Ø¬Ù…Ø§Ø¹ÙŠ',
        'Private Classroom':'ÙØµÙ„ Ø®Ø§Øµ',
        'Online Classes':'Ø­ØµØµ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†',
        'Private Online':'Ø¯Ø±ÙˆØ³ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† Ø®Ø§ØµØ©',
        'International Experiences':'ØªØ¬Ø§Ø±Ø¨ Ø¯ÙˆÙ„ÙŠØ©',
        'Summer & Winter Camps':'Ø§Ù„Ù…Ø®ÙŠÙ…Ø§Øª Ø§Ù„ØµÙŠÙÙŠØ© ÙˆØ§Ù„Ø´ØªÙˆÙŠØ©',
        'Explore unforgettable educational journeys, cultural exchange experiences, and international camps with EACC.':'Ø§Ø³ØªÙƒØ´Ù Ø±Ø­Ù„Ø§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù„Ø§ ØªÙÙ†Ø³Ù‰ ÙˆØªØ¬Ø§Ø±Ø¨ ØªØ¨Ø§Ø¯Ù„ Ø«Ù‚Ø§ÙÙŠ ÙˆÙ…Ø¹Ø³ÙƒØ±Ø§Øª Ø¯ÙˆÙ„ÙŠØ© Ù…Ø¹ EACC.',
        'Explore Camps':'Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ù…Ø®ÙŠÙ…Ø§Øª',
        'Start Your Journey With EACC Today':'Ø§Ø¨Ø¯Ø£ Ø±Ø­Ù„ØªÙƒ Ù…Ø¹ EACC Ø§Ù„ÙŠÙˆÙ…',
        "Join one of Egypt's leading educational and language institutions.": 'Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ ÙˆØ§Ø­Ø¯Ø© Ù…Ù† Ø£Ø¨Ø±Ø² Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© ÙˆØ§Ù„Ù„ØºÙˆÙŠØ© ÙÙŠ Ù…ØµØ±.',
        'Egyptian American Cultural Center offers premium language education, preparation courses, camps, and international learning experiences.':'ÙŠÙ‚Ø¯Ù‘Ù… Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ ØªØ¹Ù„ÙŠÙ… Ù„ØºØ§Øª Ù…ØªÙ…ÙŠØ²Ø§Ù‹ØŒ ÙˆØ¯ÙˆØ±Ø§Øª ØªØ­Ø¶ÙŠØ±ÙŠØ©ØŒ ÙˆÙ…Ø®ÙŠÙ…Ø§ØªØŒ ÙˆØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø¯ÙˆÙ„ÙŠØ©.',
        '117 Ahmed Shawqi, Mustafa Kamel WA Bolkli, Sidi Gaber, Alexandria Governorate 5433141':'117 Ø£Ø­Ù…Ø¯ Ø´ÙˆÙ‚ÙŠØŒ Ù…ØµØ·ÙÙ‰ ÙƒØ§Ù…Ù„ ÙˆØ¨ÙˆÙ„ÙƒÙ„ÙŠØŒ Ø³ÙŠØ¯ÙŠ Ø¬Ø§Ø¨Ø±ØŒ Ù…Ø­Ø§ÙØ¸Ø© Ø§Ù„Ø¥Ø³ÙƒÙ†Ø¯Ø±ÙŠØ© 5433141',
        'About EACC': 'Ø¹Ù† EACC',
        'Contact Page':'ØµÙØ­Ø© Ø§Ù„ØªÙˆØ§ØµÙ„',
        'Terms & Conditions': 'Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù…',
        'Privacy Policy': 'Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©',
        'Our Courses':'Ø¯ÙˆØ±Ø§ØªÙ†Ø§',
        'Follow Us':'ØªØ§Ø¨Ø¹Ù†Ø§',
        'Get Started': 'Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†',
        'Location': 'Ø§Ù„Ù…ÙˆÙ‚Ø¹',
        'LinkedIn': 'Ù„ÙŠÙ†ÙƒØ¯Ø¥Ù†',
        'Testing Center': 'Ù…Ø±ÙƒØ² Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª',
        'Partners': 'Ø§Ù„Ø´Ø±ÙƒØ§Ø¡',
        'Language, wellbeing, and future skills for every stage of life.': 'Ø§Ù„Ù„ØºØ© ÙˆØ§Ù„Ø±ÙØ§Ù‡ ÙˆØ§Ù„Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠØ© Ù„ÙƒÙ„ Ù…Ø±Ø­Ù„Ø© Ù…Ù† Ø§Ù„Ø­ÙŠØ§Ø©.',
        'Helping learners and families grow with confidence since 1996.': 'Ù†Ø³Ø§Ø¹Ø¯ Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙˆØ§Ù„Ø£Ø³Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù†Ù…Ùˆ Ø¨Ø«Ù‚Ø© Ù…Ù†Ø° 1996.',
        'Facebook':'ÙÙŠØ³Ø¨ÙˆÙƒ',
        'Instagram':'Ø¥Ù†Ø³ØªØ¬Ø±Ø§Ù…',
        'Youtube':'ÙŠÙˆØªÙŠÙˆØ¨',
        'YouTube':'ÙŠÙˆØªÙŠÙˆØ¨',
        'WhatsApp': 'ÙˆØ§ØªØ³Ø§Ø¨',
        'TikTok':'ØªÙŠÙƒ ØªÙˆÙƒ',
        'Â© 2026 Egyptian American Cultural Center. All rights reserved.': 'Â© 2026 Egyptian American Cultural Center. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.',
        'What Makes EACC Unique':'Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¹Ù„ EACC Ù…Ù…ÙŠØ²Ø§Ù‹',
        'Courses for All Ages':'Ø¯ÙˆØ±Ø§Øª Ù„ÙƒÙ„ Ø§Ù„Ø£Ø¹Ù…Ø§Ø±',
        '98% Exam Pass Rate':'Ù†Ø³Ø¨Ø© Ù†Ø¬Ø§Ø­ 98% ÙÙŠ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª',
        'Study Online or In Person':'Ø§Ø¯Ø±Ø³ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† Ø£Ùˆ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø±ÙƒØ²',
        'TOEFL Authorized Testing Center':'Ù…Ø±ÙƒØ² Ø§Ø®ØªØ¨Ø§Ø± TOEFL Ù…Ø¹ØªÙ…Ø¯',
        "Kids' Summer Camps": 'Ø§Ù„Ù…Ø¹Ø³ÙƒØ±Ø§Øª Ø§Ù„ØµÙŠÙÙŠØ© Ù„Ù„Ø£Ø·ÙØ§Ù„',
        'Partnership with Think English': 'Ø´Ø±Ø§ÙƒØ© Ù…Ø¹ Think English',
        'Learning Platform for Practice':'Ù…Ù†ØµØ© ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù„Ù„ØªØ¯Ø±ÙŠØ¨',
        'Find Your Path':'Ø§Ø®ØªØ± Ù…Ø³Ø§Ø±Ùƒ',
        'What would you like to do with EACC?':'Ù…Ø§Ø°Ø§ ØªØ±ÙŠØ¯ Ø£Ù† ØªØ¨Ø¯Ø£ Ù…Ø¹ EACCØŸ',
        'Choose the learning route that fits your goal, then continue to the right page for details, schedules, admissions support, and the next available start date.':'Ø§Ø®ØªØ± Ù…Ø³Ø§Ø± Ø§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ Ù„Ù‡Ø¯ÙÙƒØŒ Ø«Ù… Ø§Ù†ØªÙ‚Ù„ Ø¥Ù„Ù‰ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„ØªÙØ§ØµÙŠÙ„ ÙˆØ§Ù„Ø¬Ø¯Ø§ÙˆÙ„ ÙˆØ¯Ø¹Ù… Ø§Ù„Ù‚Ø¨ÙˆÙ„ ÙˆØ£Ù‚Ø±Ø¨ Ù…ÙˆØ¹Ø¯ Ø¨Ø¯Ø§ÙŠØ©.',
        'Learn a language':'ØªØ¹Ù„Ù… Ù„ØºØ©',
        'English, German, French, Italian, Spanish':'Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©ØŒ Ø§Ù„Ø£Ù„Ù…Ø§Ù†ÙŠØ©ØŒ Ø§Ù„ÙØ±Ù†Ø³ÙŠØ©ØŒ Ø§Ù„Ø¥ÙŠØ·Ø§Ù„ÙŠØ©ØŒ Ø§Ù„Ø¥Ø³Ø¨Ø§Ù†ÙŠØ©',
        'Prepare for exams':'Ø§Ø³ØªØ¹Ø¯ Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª',
        'IELTS, TOEFL, OET, PTE': 'IELTS ? TOEFL ? OET ? PTE',
        'Choose study mode':'Ø§Ø®ØªØ± Ù†Ø¸Ø§Ù… Ø§Ù„Ø¯Ø±Ø§Ø³Ø©',
        'Group, private, classroom, online':'Ù…Ø¬Ù…ÙˆØ¹Ø§ØªØŒ Ø®Ø§ØµØŒ Ø¯Ø§Ø®Ù„ Ø§Ù„Ù…Ø±ÙƒØ²ØŒ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†',
        'Join Summer Camp':'Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø¹Ø³ÙƒØ± Ø§Ù„ØµÙŠÙÙŠ',
        'MyVoice 2026 for children':'MyVoice 2026 Ù„Ù„Ø£Ø·ÙØ§Ù„',
        'Explore Our Learning Pathways': 'Ø§Ø³ØªÙƒØ´Ù Ù…Ø³Ø§Ø±Ø§ØªÙ†Ø§ Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ©',
        'Choose from focused programs built for children, teens, adults, and learners preparing for global goals.': 'Ø§Ø®ØªØ± Ù…Ù† Ø¨Ø±Ø§Ù…Ø¬ Ù…Ø±ÙƒØ²Ø© Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ† ÙˆØ§Ù„Ø¨Ø§Ù„ØºÙŠÙ† ÙˆØ§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† Ø§Ù„Ø°ÙŠÙ† ÙŠØ³ØªØ¹Ø¯ÙˆÙ† Ù„Ø£Ù‡Ø¯Ø§Ù Ø¹Ø§Ù„Ù…ÙŠØ©.',
        'Prepare For International Exams': 'Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©',
        'Build exam confidence through focused preparation programs and experienced instructors.': 'Ø§Ø¨Ù†Ù Ø«Ù‚ØªÙƒ ÙÙŠ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø¹Ø¨Ø± Ø¨Ø±Ø§Ù…Ø¬ ØªØ­Ø¶ÙŠØ± Ù…Ø±ÙƒØ²Ø© ÙˆÙ…Ø¯Ø±Ø¨ÙŠÙ† Ø°ÙˆÙŠ Ø®Ø¨Ø±Ø©.',
        'View IELTS preparation course': 'Ø¹Ø±Ø¶ Ø¯ÙˆØ±Ø© ØªØ­Ø¶ÙŠØ± IELTS',
        'View TOEFL preparation course': 'Ø¹Ø±Ø¶ Ø¯ÙˆØ±Ø© ØªØ­Ø¶ÙŠØ± TOEFL',
        'View OET preparation course': 'Ø¹Ø±Ø¶ Ø¯ÙˆØ±Ø© ØªØ­Ø¶ÙŠØ± OET',
        'View PTE preparation course': 'Ø¹Ø±Ø¶ Ø¯ÙˆØ±Ø© ØªØ­Ø¶ÙŠØ± PTE',
        'Choose How You Study': 'Ø§Ø®ØªØ± Ø·Ø±ÙŠÙ‚Ø© Ø¯Ø±Ø§Ø³ØªÙƒ',
        'Match your schedule and learning style with classroom, private, and online study options.': 'Ø·Ø§Ø¨Ù‚ Ø¬Ø¯ÙˆÙ„Ùƒ ÙˆØ£Ø³Ù„ÙˆØ¨ ØªØ¹Ù„Ù…Ùƒ Ù…Ø¹ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¯Ø±Ø§Ø³Ø© Ø¯Ø§Ø®Ù„ Ø§Ù„ÙØµÙ„ØŒ ÙˆØ§Ù„Ø¯Ø±ÙˆØ³ Ø§Ù„Ø®Ø§ØµØ©ØŒ ÙˆØ§Ù„ØªØ¹Ù„Ù… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†.',
        'Switch website language to English':'ØªØ¨Ø¯ÙŠÙ„ Ù„ØºØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©',
        'Switch website language to Arabic':'ØªØ¨Ø¯ÙŠÙ„ Ù„ØºØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©',
        'Open menu':'ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©',
        'Close menu':'Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©',
        'Home':'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
        'IELTS': 'IELTS',
        'TOEFL': 'TOEFL',
        'OET': 'OET',
        'PTE': 'PTE',
        'We provide language training and test preparation': 'Ù†Ù‚Ø¯Ù‘Ù… ØªØ¯Ø±ÙŠØ¨Ù‹Ø§ Ù„ØºÙˆÙŠÙ‹Ø§ ÙˆØ§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª.',
        'Start Your Journey': 'Ø§Ø¨Ø¯Ø£ Ø±Ø­Ù„ØªÙƒ',
        'View Course': 'Ø¹Ø±Ø¶ Ø§Ù„ÙƒÙˆØ±Ø³',
        'IELTS Preparation Course': 'Ø¯ÙˆØ±Ø© Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ø§Ø®ØªØ¨Ø§Ø± IELTS',
        'TOEFL Preparation Course': 'Ø¯ÙˆØ±Ø© Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ø§Ø®ØªØ¨Ø§Ø± TOEFL',
        'OET Preparation Course': 'Ø¯ÙˆØ±Ø© Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ø§Ø®ØªØ¨Ø§Ø± OET',
        'PTE Preparation Course': 'Ø¯ÙˆØ±Ø© Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ø§Ø®ØªØ¨Ø§Ø± PTE',
        'For students aiming for international exams': 'Ù„Ù„Ø·Ù„Ø§Ø¨ Ø§Ù„Ø³Ø§Ø¹ÙŠÙ† Ø¥Ù„Ù‰ Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©',
        'Professional instructors': 'Ù…Ø¯Ø±Ø¨ÙˆÙ† Ù…Ø­ØªØ±ÙÙˆÙ†',
        'Mock tests and practice materials': 'Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ØªØ¬Ø±ÙŠØ¨ÙŠØ© ÙˆÙ…ÙˆØ§Ø¯ ØªØ¯Ø±ÙŠØ¨',
        'Flexible schedules': 'Ù…ÙˆØ§Ø¹ÙŠØ¯ Ù…Ø±Ù†Ø©',
        'One-on-one tutoring': 'Ù…ØªØ§Ø¨Ø¹Ø© ÙØ±Ø¯ÙŠØ©',
        'Group sessions': 'Ø¬Ù„Ø³Ø§Øª Ø¬Ù…Ø§Ø¹ÙŠØ©',
        'Online classes available': 'Ø­ØµØµ Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† Ù…ØªØ§Ø­Ø©',
        'Contact for enrollment': 'ØªÙˆØ§ØµÙ„ Ù„Ù„ØªØ³Ø¬ÙŠÙ„',
        'Call us':'Ø§ØªØµÙ„ Ø¨Ù†Ø§',
        'Email us': 'Ø±Ø§Ø³Ù„Ù†Ø§ Ø¹Ø¨Ø± Ø§Ù„Ø¨Ø±ÙŠØ¯',
        'Visit our office': 'Ø²Ø± Ù…ÙƒØªØ¨Ù†Ø§',
        'Get in Touch': 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§',
        'We would love to hear from you': 'ÙŠØ³Ø¹Ø¯Ù†Ø§ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹Ùƒ',
        'Office Hours': 'Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ø¹Ù…Ù„',
        'Saturday to Thursday': 'Ù…Ù† Ø§Ù„Ø³Ø¨Øª Ø¥Ù„Ù‰ Ø§Ù„Ø®Ù…ÙŠØ³',
        'Friday': 'Ø§Ù„Ø¬Ù…Ø¹Ø©',
        'Closed': 'Ù…ØºÙ„Ù‚',
        'Send us a message': 'Ø£Ø±Ø³Ù„ Ù„Ù†Ø§ Ø±Ø³Ø§Ù„Ø©',
        'Name': 'Ø§Ù„Ø§Ø³Ù…',
        'Email':'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ',
        'Message':'Ø§Ù„Ø±Ø³Ø§Ù„Ø©',
        'Send': 'Ø¥Ø±Ø³Ø§Ù„',
        'Thank you for your message': 'Ø´ÙƒØ±Ù‹Ø§ Ù„Ø±Ø³Ø§Ù„ØªÙƒ',
        'We will get back to you soon': 'Ø³Ù†Ø¹ÙˆØ¯ Ø¥Ù„ÙŠÙƒ Ù‚Ø±ÙŠØ¨Ù‹Ø§'
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

    // Legacy manual translator disabled: AR/EN now uses mirrored /ar/ pages.
    if (true) {
      // No global translation binding.
    } else {
      collectTranslatableText();
      applyLanguage('en');
      languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
      });
    }

    const hideSiteLoader = () => {

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

    };

    if (document.readyState === 'complete') {
      hideSiteLoader();
    } else {
      window.addEventListener('load', hideSiteLoader, { once: true });
      document.addEventListener('DOMContentLoaded', hideSiteLoader, { once: true });
      setTimeout(hideSiteLoader, 2200);
    }

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
          .forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.querySelector(':scope > a')?.setAttribute('aria-expanded', 'false');
          });
      }

    };

    const setupMobileDropdowns = () => {

      navLinks.querySelectorAll('.dropdown').forEach(dropdown => {

        const trigger =
          dropdown.querySelector(':scope > a');

        const menu =
          dropdown.querySelector(':scope > .dropdown-menu');

        if (!trigger || !menu) return;

        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');

        if (!menu.querySelector(':scope > .dropdown-parent-link')) {

          const parentLink =
            document.createElement('a');

          const label =
            trigger.textContent.replace(/\s+/g, ' ').trim();

          parentLink.className = 'dropdown-parent-link';
          parentLink.href = trigger.getAttribute('href') || '#';
          parentLink.textContent = `View ${label} page`;

          const localLink =
            trigger.getAttribute('data-local-link');

          if (localLink) {
            parentLink.setAttribute('data-local-link', localLink);
          }

          menu.prepend(parentLink);

        }

      });

    };

    setupMobileDropdowns();

    mobileToggle.addEventListener('click', () => {

      setMobileMenuState(!navLinks.classList.contains('active'));

    });

    const closeMobileDropdowns = (exceptDropdown = null) => {

      navLinks.querySelectorAll('.dropdown.open')
        .forEach(dropdown => {

          if (dropdown !== exceptDropdown) {
            dropdown.classList.remove('open');
            dropdown.querySelector(':scope > a')?.setAttribute('aria-expanded', 'false');
          }

        });

    };

    navLinks.addEventListener('click', event => {

      const dropdownTrigger =
        event.target.closest('.dropdown > a');

      const isDropdownTapMode =
        window.matchMedia('(max-width: 768px)').matches;

      if (dropdownTrigger && isDropdownTapMode) {
        event.preventDefault();
        event.stopPropagation();

        const dropdown = dropdownTrigger.closest('.dropdown');
        const willOpen = !dropdown.classList.contains('open');

        closeMobileDropdowns(dropdown);
        dropdown.classList.toggle('open', willOpen);
        dropdownTrigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        return;
      }

      const link =
        event.target.closest('a');

      if (link) {

        closeMobileDropdowns();
        setMobileMenuState(false);

      }

    });

    document.addEventListener('keydown', event => {

      if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        setMobileMenuState(false);
        mobileToggle.focus();
      }

    });

    /* HERO SLIDER */

    const slides =
      document.querySelectorAll('.slide');

    let currentSlide = 0;

    if (slides.length) {
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
    }
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

/* --- Legacy widget translation removed: language switching now uses mirrored /ar/ pages. --- */


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

  // Legacy dictionary translator is disabled globally; language switching now uses mirrored /ar/ pages.
  if (true) {
    return;
  }

  var STORAGE_KEY = 'eacc-preferred-language';
  var LEGACY_STORAGE_KEYS = [
    'eacc-preferred-language-disabled',
    'eacc-lang',
    'eaccLanguage',
    'preferredLanguage'
  ];

  window.EACC_TRANSLATIONS = window.EACC_TRANSLATIONS || {};
  window.EACC_TRANSLATIONS.enToAr = {
    "Egyptian American Center": "Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ",
    "Home": "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    "Summer Camp 2026": "Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ 2026",
    "Overview": "Ù†Ø¸Ø±Ø© Ø¹Ø§Ù…Ø©",
    "Programs & Activities": "Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬ ÙˆØ§Ù„Ø£Ù†Ø´Ø·Ø©",
    "Schedule & Fees": "Ø§Ù„Ù…ÙˆØ§Ø¹ÙŠØ¯ ÙˆØ§Ù„Ø±Ø³ÙˆÙ…",
    "Previous Camps": "Ø§Ù„Ù…Ø¹Ø³ÙƒØ±Ø§Øª Ø§Ù„Ø³Ø§Ø¨Ù‚Ø©",
    "Frequently Asked Questions": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "Our Services": "Ø®Ø¯Ù…Ø§ØªÙ†Ø§",
    "Language Academy": "Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ù„ØºØ§Øª",
    "Kids & Youth Development Academy": "Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ØªÙ†Ù…ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨",
    "International Exam Preparation": "Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©",
    "Online Language Center": "Ù…Ø±ÙƒØ² Ø§Ù„Ù„ØºØ§Øª Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†",
    "MindSpace": "Ù…Ø§ÙŠÙ†Ø¯ Ø³Ø¨ÙŠØ³",
    "About MindSpace": "Ø¹Ù† Ù…Ø§ÙŠÙ†Ø¯ Ø³Ø¨ÙŠØ³",
    "Therapy Services": "Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¹Ù„Ø§Ø¬",
    "Assessments": "Ø§Ù„ØªÙ‚ÙŠÙŠÙ…Ø§Øª",
    "Family Support": "Ø¯Ø¹Ù… Ø§Ù„Ø£Ø³Ø±Ø©",
    "Professional Workshops": "ÙˆØ±Ø´ Ø¹Ù…Ù„ Ø§Ø­ØªØ±Ø§ÙÙŠØ©",
    "Book an Appointment": "Ø§Ø­Ø¬Ø² Ù…ÙˆØ¹Ø¯",
    "Testing Center": "Ù…Ø±ÙƒØ² Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª",
    "TOEFL": "TOEFL",
    "CELI & CILS": "CELI Ùˆ CILS",
    "Placement Test": "Ø§Ø®ØªØ¨Ø§Ø± ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³ØªÙˆÙ‰",
    "Psychological Assessment": "Ø§Ù„ØªÙ‚ÙŠÙŠÙ… Ø§Ù„Ù†ÙØ³ÙŠ",
    "Corporate Training": "Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ",
    "About": "Ø¹Ù† Ø§Ù„Ù…Ø±ÙƒØ²",
    "Our Story": "Ù‚ØµØªÙ†Ø§",
    "Leadership Team": "ÙØ±ÙŠÙ‚ Ø§Ù„Ù‚ÙŠØ§Ø¯Ø©",
    "Partners & Accreditations": "Ø§Ù„Ø´Ø±ÙƒØ§Ø¡ ÙˆØ§Ù„Ø§Ø¹ØªÙ…Ø§Ø¯Ø§Øª",
    "Careers": "Ø§Ù„ÙˆØ¸Ø§Ø¦Ù",
    "FAQs": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "Contact Us": "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§",
    "Visit Our Center": "Ø²Ø± Ù…Ø±ÙƒØ²Ù†Ø§",
    "Request Information": "Ø·Ù„Ø¨ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª",
    "Book a Consultation": "Ø§Ø­Ø¬Ø² Ø§Ø³ØªØ´Ø§Ø±Ø©",
    "AR": "AR",
    "LMS": "Ø¯Ø®ÙˆÙ„ LMS",
    "Contact": "ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§",
    "LMS Login": "Ø¯Ø®ÙˆÙ„ LMS",
    "FAQ": "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    "Terms & Conditions": "Ø§Ù„Ø´Ø±ÙˆØ· ÙˆØ§Ù„Ø£Ø­ÙƒØ§Ù…",
    "Privacy Policy": "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
    "Refund Policy": "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯",
    "Loading website": "Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…ÙˆÙ‚Ø¹",
    "EACC Logo": "Ø´Ø¹Ø§Ø± EACC",
    "Switch website language to Arabic": "ØªØ¨Ø¯ÙŠÙ„ Ù„ØºØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¥Ù„Ù‰ Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©",
    "Switch website language to English": "ØªØ¨Ø¯ÙŠÙ„ Ù„ØºØ© Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¥Ù„Ù‰ Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©",
    "Open menu": "ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©",
    "Close menu": "Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©",
    "Chat with EACC on WhatsApp": "ØªÙˆØ§ØµÙ„ Ù…Ø¹ EACC Ø¹Ù„Ù‰ ÙˆØ§ØªØ³Ø§Ø¨",
    "Empowering Minds. Building Futures.": "ØªÙ…ÙƒÙŠÙ† Ø§Ù„Ø¹Ù‚ÙˆÙ„. Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.",
    "Egyptian American Cultural Center": "Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ",
    "Since 1996, the Egyptian American Cultural Center has guided more than 60,000 graduates toward stronger communication, greater confidence, and a global outlook through accredited language programs, international exam preparation, and professional development.": "Ù…Ù†Ø° Ø¹Ø§Ù… 1996ØŒ ÙˆØ¬Ù‘Ù‡ Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ Ø£ÙƒØ«Ø± Ù…Ù† 60,000 Ø®Ø±ÙŠØ¬ Ù†Ø­Ùˆ ØªÙˆØ§ØµÙ„ Ø£Ù‚ÙˆÙ‰ØŒ ÙˆØ«Ù‚Ø© Ø£ÙƒØ¨Ø±ØŒ ÙˆÙ†Ø¸Ø±Ø© Ø¹Ø§Ù„Ù…ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ Ø¨Ø±Ø§Ù…Ø¬ Ù„ØºÙˆÙŠØ© Ù…Ø¹ØªÙ…Ø¯Ø©ØŒ ÙˆØ§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø§Ù„Ø¯ÙˆÙ„ÙŠØ©ØŒ ÙˆØ§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ù‡Ù†ÙŠ.",
    "Expanding Our Offerings in 2026": "ØªÙˆØ³ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙÙŠ 2026",
    "Excellence today requires more than language proficiency alone. EACC is extending its services to support learners across academics, wellbeing, creativity, and technology.": "Ø§Ù„ØªÙ…ÙŠØ² Ø§Ù„ÙŠÙˆÙ… ÙŠØªØ·Ù„Ø¨ Ø£ÙƒØ«Ø± Ù…Ù† Ø¥ØªÙ‚Ø§Ù† Ø§Ù„Ù„ØºØ© ÙÙ‚Ø·. ØªØ¹Ù…Ù„ EACC Ø¹Ù„Ù‰ ØªÙˆØ³ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ‡Ø§ Ù„Ø¯Ø¹Ù… Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙÙŠ Ø§Ù„Ù…Ø¬Ø§Ù„Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©ØŒ ÙˆØ§Ù„Ø±ÙØ§Ù‡ Ø§Ù„Ù†ÙØ³ÙŠØŒ ÙˆØ§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ØŒ ÙˆØ§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§.",
    "Integrated Pathways for Growth": "Ù…Ø³Ø§Ø±Ø§Øª Ù…ØªÙƒØ§Ù…Ù„Ø© Ù„Ù„Ù†Ù…Ùˆ",
    "Complementing our language programs, new services in psychological wellbeing, robotics, and creative arts help children, youth, and adults build resilience, critical thinking, and the confidence to succeed long term.": "Ø§Ø³ØªÙƒÙ…Ø§Ù„Ù‹Ø§ Ù„Ø¨Ø±Ø§Ù…Ø¬Ù†Ø§ Ø§Ù„Ù„ØºÙˆÙŠØ©ØŒ ØªØ³Ø§Ø¹Ø¯ Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ Ø§Ù„Ø±ÙØ§Ù‡ Ø§Ù„Ù†ÙØ³ÙŠØŒ ÙˆØ§Ù„Ø±ÙˆØ¨ÙˆØªØ§ØªØŒ ÙˆØ§Ù„ÙÙ†ÙˆÙ† Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨ ÙˆØ§Ù„Ø¨Ø§Ù„ØºÙŠÙ† Ø¹Ù„Ù‰ Ø¨Ù†Ø§Ø¡ Ø§Ù„Ù…Ø±ÙˆÙ†Ø©ØŒ ÙˆØ§Ù„ØªÙÙƒÙŠØ± Ø§Ù„Ù†Ù‚Ø¯ÙŠØŒ ÙˆØ§Ù„Ø«Ù‚Ø© Ù„Ù„Ù†Ø¬Ø§Ø­ Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø¯Ù‰ Ø§Ù„Ø·ÙˆÙŠÙ„.",
    "Explore Services": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
    "Enroll Now": "Ø³Ø¬Ù„ Ø§Ù„Ø¢Ù†",
    "Language opens doors. Wellbeing builds resilience. Technology develops future skills. Creativity inspires innovation.": "Ø§Ù„Ù„ØºØ© ØªÙØªØ­ Ø§Ù„Ø£Ø¨ÙˆØ§Ø¨. Ø§Ù„Ø±ÙØ§Ù‡ ÙŠØ¨Ù†ÙŠ Ø§Ù„Ù…Ø±ÙˆÙ†Ø©. Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ ØªØ·ÙˆØ± Ù…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„. Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙŠÙ„Ù‡Ù… Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø±.",
    "Summer Camp 2026 activities": "Ø£Ù†Ø´Ø·Ø© Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ 2026",
    "Now Enrolling: Summer Camp 2026": "Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ù…ÙØªÙˆØ­ Ø§Ù„Ø¢Ù†: Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ 2026",
    "A dynamic summer experience combining English, robotics, arts, and engaging activities for children and teens.": "ØªØ¬Ø±Ø¨Ø© ØµÙŠÙÙŠØ© Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ© ØªØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©ØŒ ÙˆØ§Ù„Ø±ÙˆØ¨ÙˆØªØ§ØªØŒ ÙˆØ§Ù„ÙÙ†ÙˆÙ†ØŒ ÙˆØ£Ù†Ø´Ø·Ø© ØªÙØ§Ø¹Ù„ÙŠØ© Ù„Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ†.",
    "Learn More": "Ø§Ø¹Ø±Ù Ø§Ù„Ù…Ø²ÙŠØ¯",
    "Mind Space by EACC logo": "Ø´Ø¹Ø§Ø± Mind Space by EACC",
    "Mind Space by EACC": "Ù…Ø§ÙŠÙ†Ø¯ Ø³Ø¨ÙŠØ³ Ù…Ù† EACC",
    "Psychological therapy, assessments, and family support for children, youth, and adults.": "Ø¹Ù„Ø§Ø¬ Ù†ÙØ³ÙŠØŒ ÙˆØªÙ‚ÙŠÙŠÙ…Ø§ØªØŒ ÙˆØ¯Ø¹Ù… Ø£Ø³Ø±ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨ ÙˆØ§Ù„Ø¨Ø§Ù„ØºÙŠÙ†.",
    "Robotics and creative workshops": "ÙˆØ±Ø´ Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª ÙˆØ§Ù„Ø¥Ø¨Ø¯Ø§Ø¹",
    "Robotics Lab & Expressive Studios": "Ù…Ø¹Ù…Ù„ Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª ÙˆØ§Ø³ØªÙˆØ¯ÙŠÙˆÙ‡Ø§Øª Ø§Ù„ÙÙ†ÙˆÙ† Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ©",
    "Hands-on robotics, creative expression, and workshops that build confidence, creativity, and future skills.": "ØªØ·Ø¨ÙŠÙ‚ Ø¹Ù…Ù„ÙŠ ÙÙŠ Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§ØªØŒ ÙˆØªØ¹Ø¨ÙŠØ± Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØŒ ÙˆÙˆØ±Ø´ ØªØ¨Ù†ÙŠ Ø§Ù„Ø«Ù‚Ø© ÙˆØ§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.",
    "Authorized testing services": "Ø®Ø¯Ù…Ø§Øª Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯Ø©",
    "Authorized Testing Center": "Ù…Ø±ÙƒØ² Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯",
    "Official registration for TOEFL, CILS, and CELI exams, placement tests, and psychological assessments.": "ØªØ³Ø¬ÙŠÙ„ Ø±Ø³Ù…ÙŠ Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª TOEFL ÙˆCILS ÙˆCELI ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ ÙˆØ§Ù„ØªÙ‚ÙŠÙŠÙ…Ø§Øª Ø§Ù„Ù†ÙØ³ÙŠØ©.",
    "Book Your Test": "Ø§Ø­Ø¬Ø² Ø§Ø®ØªØ¨Ø§Ø±Ùƒ",
    "Established in 1996, EACC has supported 60,000+ graduates since 1996, serves as an Authorized TOEFL, CILS & CELI Testing Center, is powered by 80+ educators and specialists, and is part of Future Education Holding.": "Ù…Ù†Ø° ØªØ£Ø³ÙŠØ³Ù‡Ø§ ÙÙŠ 1996ØŒ Ø¯Ø¹Ù…Øª EACC Ø£ÙƒØ«Ø± Ù…Ù† 60,000 Ø®Ø±ÙŠØ¬ØŒ ÙˆØªØ¹Ù…Ù„ ÙƒÙ…Ø±ÙƒØ² Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯ Ù„Ù€ TOEFL ÙˆCILS ÙˆCELIØŒ ÙˆÙŠÙ‚ÙˆØ¯Ù‡Ø§ Ø£ÙƒØ«Ø± Ù…Ù† 80 Ù…Ø¹Ù„Ù‘Ù…Ù‹Ø§ ÙˆÙ…ØªØ®ØµØµÙ‹Ø§ØŒ ÙˆÙ‡ÙŠ Ø¬Ø²Ø¡ Ù…Ù† Future Education Holding.",
    "Registration Now Open": "Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ù…ØªØ§Ø­ Ø§Ù„Ø¢Ù†",
    "My Voice Summer Camp 2026": "Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ My Voice 2026",
    "A transformational summer experience where children and teens build confidence, strengthen their English, explore robotics and creative expression, and discover their unique voice.": "ØªØ¬Ø±Ø¨Ø© ØµÙŠÙÙŠØ© ØªØ­ÙˆÙŠÙ„ÙŠØ© ÙŠØ¨Ù†ÙŠ ÙÙŠÙ‡Ø§ Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙˆÙ† Ø§Ù„Ø«Ù‚Ø©ØŒ ÙˆÙŠØ·ÙˆÙ‘Ø±ÙˆÙ† Ù„ØºØªÙ‡Ù… Ø§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©ØŒ ÙˆÙŠØ³ØªÙƒØ´ÙÙˆÙ† Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª ÙˆØ§Ù„ØªØ¹Ø¨ÙŠØ± Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ÙŠØŒ ÙˆÙŠÙƒØªØ´ÙÙˆÙ† ØµÙˆØªÙ‡Ù… Ø§Ù„Ø®Ø§Øµ.",
    "Personalized Assessments": "ØªÙ‚ÙŠÙŠÙ…Ø§Øª Ù…Ø®ØµØµØ©",
    "Robotics": "Ø§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª",
    "Expressive Arts": "Ø§Ù„ÙÙ†ÙˆÙ† Ø§Ù„ØªØ¹Ø¨ÙŠØ±ÙŠØ©",
    "Field Trips": "Ø±Ø­Ù„Ø§Øª Ù…ÙŠØ¯Ø§Ù†ÙŠØ©",
    "Adventure Camp": "Ù…Ø®ÙŠÙ… Ø§Ù„Ù…ØºØ§Ù…Ø±Ø©",
    "Parent Club": "Ù†Ø§Ø¯ÙŠ Ø£ÙˆÙ„ÙŠØ§Ø¡ Ø§Ù„Ø£Ù…ÙˆØ±",
    "Final Showcase": "Ø§Ù„Ø¹Ø±Ø¶ Ø§Ù„Ø®ØªØ§Ù…ÙŠ",
    "Explore My Voice Summer Camp 2026": "Ø§Ø³ØªÙƒØ´Ù Ù…Ø®ÙŠÙ… My Voice Ø§Ù„ØµÙŠÙÙŠ 2026",
    "Register for Summer Camp": "Ø³Ø¬Ù„ ÙÙŠ Ø§Ù„Ù…Ø®ÙŠÙ… Ø§Ù„ØµÙŠÙÙŠ",
    "Limited seats available.": "Ø§Ù„Ø£Ù…Ø§ÙƒÙ† Ù…Ø­Ø¯ÙˆØ¯Ø©.",
    "Featured Services": "Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…Ù…ÙŠØ²Ø©",
    "Discover the Service That Fits Your Goals": "Ø§ÙƒØªØ´Ù Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø£Ù‡Ø¯Ø§ÙÙƒ",
    "Whether you are looking for language training, international testing, psychological support, online learning, or customized corporate solutions, EACC offers trusted services designed to help you succeed.": "Ø³ÙˆØ§Ø¡ ÙƒÙ†Øª ØªØ¨Ø­Ø« Ø¹Ù† ØªØ¯Ø±ÙŠØ¨ Ù„ØºÙˆÙŠØŒ Ø£Ùˆ Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø¯ÙˆÙ„ÙŠØ©ØŒ Ø£Ùˆ Ø¯Ø¹Ù… Ù†ÙØ³ÙŠØŒ Ø£Ùˆ ØªØ¹Ù„Ù… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†ØŒ Ø£Ùˆ Ø­Ù„ÙˆÙ„ Ù…Ø¤Ø³Ø³ÙŠØ© Ù…Ø®ØµØµØ©ØŒ ØªÙ‚Ø¯Ù… EACC Ø®Ø¯Ù…Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø© Ù…ØµÙ…Ù…Ø© Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø¬Ø§Ø­.",
    "Language Academy programs": "Ø¨Ø±Ø§Ù…Ø¬ Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ù„ØºØ§Øª",
    "Structured language programs for school, work, study, travel, and everyday communication.": "Ø¨Ø±Ø§Ù…Ø¬ Ù„ØºÙˆÙŠØ© Ù…Ù†Ø¸Ù…Ø© Ù„Ù„Ù…Ø¯Ø±Ø³Ø© ÙˆØ§Ù„Ø¹Ù…Ù„ ÙˆØ§Ù„Ø¯Ø±Ø§Ø³Ø© ÙˆØ§Ù„Ø³ÙØ± ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„ÙŠÙˆÙ…ÙŠ.",
    "Explore Language Academy": "Ø§Ø³ØªÙƒØ´Ù Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ù„ØºØ§Øª",
    "Kids and youth development programs": "Ø¨Ø±Ø§Ù…Ø¬ ØªÙ†Ù…ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨",
    "English for kids, robotics lab, teen programs, and workshops that develop confidence and future skills.": "Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠ Ù„Ù„Ø£Ø·ÙØ§Ù„ØŒ ÙˆÙ…Ø¹Ù…Ù„ Ø±ÙˆØ¨ÙˆØªØ§ØªØŒ ÙˆØ¨Ø±Ø§Ù…Ø¬ Ù„Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ†ØŒ ÙˆÙˆØ±Ø´ ØªØ·ÙˆÙ‘Ø± Ø§Ù„Ø«Ù‚Ø© ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.",
    "Explore Kids & Youth Academy": "Ø§Ø³ØªÙƒØ´Ù Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ø´Ø¨Ø§Ø¨",
    "Therapy services, assessments, family support, and professional workshops.": "Ø®Ø¯Ù…Ø§Øª Ø¹Ù„Ø§Ø¬ØŒ ÙˆØªÙ‚ÙŠÙŠÙ…Ø§ØªØŒ ÙˆØ¯Ø¹Ù… Ø£Ø³Ø±ÙŠØŒ ÙˆÙˆØ±Ø´ Ø§Ø­ØªØ±Ø§ÙÙŠØ©.",
    "Explore Mind Space": "Ø§Ø³ØªÙƒØ´Ù Mind Space",
    "Testing center services": "Ø®Ø¯Ù…Ø§Øª Ù…Ø±ÙƒØ² Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª",
    "TOEFL, CILS, CELI, placement tests, and psychological assessments.": "TOEFL ÙˆCILS ÙˆCELI ÙˆØ§Ø®ØªØ¨Ø§Ø±Ø§Øª ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ ÙˆØ§Ù„ØªÙ‚ÙŠÙŠÙ…Ø§Øª Ø§Ù„Ù†ÙØ³ÙŠØ©.",
    "Explore Testing Services": "Ø§Ø³ØªÙƒØ´Ù Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª",
    "Online language learning": "ØªØ¹Ù„Ù… Ø§Ù„Ù„ØºØ§Øª Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†",
    "A focused landing point for flexible online language services and learner support.": "Ù†Ù‚Ø·Ø© Ø§Ù†Ø·Ù„Ø§Ù‚ Ù…Ø±ÙƒØ²Ø© Ù„Ø®Ø¯Ù…Ø§Øª Ù„ØºÙˆÙŠØ© Ù…Ø±Ù†Ø© Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† ÙˆØ¯Ø¹Ù… Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ†.",
    "Explore Online Learning": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„ØªØ¹Ù„Ù… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†",
    "Corporate training classroom": "Ù‚Ø§Ø¹Ø© Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ",
    "Customized language, communication, and professional development programs for organizations.": "Ø¨Ø±Ø§Ù…Ø¬ Ù…Ø®ØµØµØ© ÙÙŠ Ø§Ù„Ù„ØºØ© ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ ÙˆØ§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ù…Ù‡Ù†ÙŠ Ù„Ù„Ù…Ø¤Ø³Ø³Ø§Øª.",
    "Explore Corporate Training": "Ø§Ø³ØªÙƒØ´Ù Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ù…Ø¤Ø³Ø³ÙŠ",
    "Why Choose EACC": "Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø± EACC",
    "What Makes EACC Unique": "Ù…Ø§ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¹Ù„ EACC Ù…Ù…ÙŠØ²Ø©",
    "EACC combines trusted educational experience with new academic, wellbeing, creative, and technology pathways for learners at every stage of life.": "ØªØ¬Ù…Ø¹ EACC Ø¨ÙŠÙ† Ø§Ù„Ø®Ø¨Ø±Ø© Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ…Ø³Ø§Ø±Ø§Øª Ø¬Ø¯ÙŠØ¯Ø© Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ÙˆÙ†ÙØ³ÙŠØ© ÙˆØ¥Ø¨Ø¯Ø§Ø¹ÙŠØ© ÙˆØªÙ‚Ù†ÙŠØ© Ù„Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙÙŠ ÙƒÙ„ Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ø­ÙŠØ§Ø©.",
    "EACC students learning in class": "Ø·Ù„Ø§Ø¨ EACC ÙŠØªØ¹Ù„Ù…ÙˆÙ† Ø¯Ø§Ø®Ù„ Ø§Ù„ÙØµÙ„",
    "Language Expertise": "Ø®Ø¨Ø±Ø© Ù„ØºÙˆÙŠØ©",
    "Clear placement, strong instruction, and practical communication pathways for children, teens, and adults.": "ØªØ­Ø¯ÙŠØ¯ Ù…Ø³ØªÙˆÙ‰ ÙˆØ§Ø¶Ø­ØŒ ÙˆØªØ¹Ù„ÙŠÙ… Ù‚ÙˆÙŠØŒ ÙˆÙ…Ø³Ø§Ø±Ø§Øª ØªÙˆØ§ØµÙ„ Ø¹Ù…Ù„ÙŠØ© Ù„Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ† ÙˆØ§Ù„Ø¨Ø§Ù„ØºÙŠÙ†.",
    "Courses for students of different ages": "Ø¯ÙˆØ±Ø§Øª Ù„Ø·Ù„Ø§Ø¨ Ù…Ù† Ø£Ø¹Ù…Ø§Ø± Ù…Ø®ØªÙ„ÙØ©",
    "Whole-Learner Support": "Ø¯Ø¹Ù… Ø´Ø§Ù…Ù„ Ù„Ù„Ù…ØªØ¹Ù„Ù…",
    "Mind Space services help families and learners build confidence, resilience, and clarity.": "ØªØ³Ø§Ø¹Ø¯ Ø®Ø¯Ù…Ø§Øª Mind Space Ø§Ù„Ø£Ø³Ø± ÙˆØ§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† Ø¹Ù„Ù‰ Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø«Ù‚Ø© ÙˆØ§Ù„Ù…Ø±ÙˆÙ†Ø© ÙˆØ§Ù„ÙˆØ¶ÙˆØ­.",
    "Student using an online learning platform": "Ø·Ø§Ù„Ø¨ ÙŠØ³ØªØ®Ø¯Ù… Ù…Ù†ØµØ© ØªØ¹Ù„ÙŠÙ… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†",
    "Technology for Learning": "Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ù…Ù† Ø£Ø¬Ù„ Ø§Ù„ØªØ¹Ù„Ù…",
    "LMS access, online learning options, robotics, and digital practice support modern learning habits.": "Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ LMS ÙˆØ®ÙŠØ§Ø±Ø§Øª Ø§Ù„ØªØ¹Ù„Ù… Ø£ÙˆÙ†Ù„Ø§ÙŠÙ† ÙˆØ§Ù„Ø±ÙˆØ¨ÙˆØªØ§Øª ÙˆØ§Ù„ØªØ¯Ø±ÙŠØ¨ Ø§Ù„Ø±Ù‚Ù…ÙŠ ØªØ¯Ø¹Ù… Ø¹Ø§Ø¯Ø§Øª ØªØ¹Ù„Ù… Ø­Ø¯ÙŠØ«Ø©.",
    "TOEFL authorized testing center": "Ù…Ø±ÙƒØ² Ø§Ø®ØªØ¨Ø§Ø± TOEFL Ù…Ø¹ØªÙ…Ø¯",
    "Official Testing": "Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ø±Ø³Ù…ÙŠØ©",
    "Authorized testing and assessment services create a trusted entry point for learners.": "ØªÙˆÙØ± Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª ÙˆØ§Ù„ØªÙ‚ÙŠÙŠÙ…Ø§Øª Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø© Ù†Ù‚Ø·Ø© Ø§Ù†Ø·Ù„Ø§Ù‚ Ù…ÙˆØ«ÙˆÙ‚Ø© Ù„Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ†.",
    "Success Stories": "Ù‚ØµØµ Ø§Ù„Ù†Ø¬Ø§Ø­",
    "Real Results. Meaningful Impact.": "Ù†ØªØ§Ø¦Ø¬ Ø­Ù‚ÙŠÙ‚ÙŠØ©. Ø£Ø«Ø± Ù…Ù„Ù…ÙˆØ³.",
    "For nearly three decades, Egyptian American Cultural Center has helped learners, families, and organizations achieve their goals through education, assessment, and personal development.": "Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ù…Ø§ ÙŠÙ‚Ø§Ø±Ø¨ Ø«Ù„Ø§Ø«Ø© Ø¹Ù‚ÙˆØ¯ØŒ Ø³Ø§Ø¹Ø¯ Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙˆØ§Ù„Ø£Ø³Ø± ÙˆØ§Ù„Ù…Ø¤Ø³Ø³Ø§Øª Ø¹Ù„Ù‰ ØªØ­Ù‚ÙŠÙ‚ Ø£Ù‡Ø¯Ø§ÙÙ‡Ù… Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„ØªØ¹Ù„ÙŠÙ… ÙˆØ§Ù„ØªÙ‚ÙŠÙŠÙ… ÙˆØ§Ù„ØªØ·ÙˆÙŠØ± Ø§Ù„Ø´Ø®ØµÙŠ.",
    "Language Confidence": "Ø«Ù‚Ø© Ù„ØºÙˆÙŠØ©",
    "Students move from placement to practical communication through guided instruction, feedback, and consistent practice.": "ÙŠÙ†ØªÙ‚Ù„ Ø§Ù„Ø·Ù„Ø§Ø¨ Ù…Ù† ØªØ­Ø¯ÙŠØ¯ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø¥Ù„Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø¹Ù…Ù„ÙŠ Ø¹Ø¨Ø± ØªÙˆØ¬ÙŠÙ‡ ØªØ¹Ù„ÙŠÙ…ÙŠ ÙˆØªØºØ°ÙŠØ© Ø±Ø§Ø¬Ø¹Ø© ÙˆØªØ¯Ø±ÙŠØ¨ Ù…Ù†ØªØ¸Ù….",
    "Families gain clearer pathways for children and teens through assessment, counseling, and development-focused programs.": "ØªØ­ØµÙ„ Ø§Ù„Ø£Ø³Ø± Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø±Ø§Øª Ø£ÙˆØ¶Ø­ Ù„Ù„Ø£Ø·ÙØ§Ù„ ÙˆØ§Ù„Ù…Ø±Ø§Ù‡Ù‚ÙŠÙ† Ø¹Ø¨Ø± Ø§Ù„ØªÙ‚ÙŠÙŠÙ… ÙˆØ§Ù„Ø¥Ø±Ø´Ø§Ø¯ ÙˆØ¨Ø±Ø§Ù…Ø¬ ØªØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„ØªØ·ÙˆÙŠØ±.",
    "Organizational Growth": "Ù†Ù…Ùˆ Ø§Ù„Ù…Ø¤Ø³Ø³Ø§Øª",
    "Teams benefit from targeted training that connects language, communication, and professional performance.": "ØªØ³ØªÙÙŠØ¯ Ø§Ù„ÙØ±Ù‚ Ù…Ù† ØªØ¯Ø±ÙŠØ¨ Ù…ÙˆØ¬Ù‡ ÙŠØ±Ø¨Ø· Ø¨ÙŠÙ† Ø§Ù„Ù„ØºØ© ÙˆØ§Ù„ØªÙˆØ§ØµÙ„ ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ Ø§Ù„Ù…Ù‡Ù†ÙŠ.",
    "Trusted Partnerships. International Standards.": "Ø´Ø±Ø§ÙƒØ§Øª Ù…ÙˆØ«ÙˆÙ‚Ø©. Ù…Ø¹Ø§ÙŠÙŠØ± Ø¯ÙˆÙ„ÙŠØ©.",
    "Egyptian American Cultural Center works with respected educational institutions and authorized testing organizations to deliver internationally recognized services and assessments.": "ÙŠØªØ¹Ø§ÙˆÙ† Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ Ù…Ø¹ Ù…Ø¤Ø³Ø³Ø§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù…Ø±Ù…ÙˆÙ‚Ø© ÙˆØ¬Ù‡Ø§Øª Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯Ø© Ù„ØªÙ‚Ø¯ÙŠÙ… Ø®Ø¯Ù…Ø§Øª ÙˆØªÙ‚ÙŠÙŠÙ…Ø§Øª Ù…Ø¹ØªØ±Ù Ø¨Ù‡Ø§ Ø¯ÙˆÙ„ÙŠÙ‹Ø§.",
    "TOEFL logo": "Ø´Ø¹Ø§Ø± TOEFL",
    "Authorized Testing Organization": "Ø¬Ù‡Ø© Ø§Ø®ØªØ¨Ø§Ø±Ø§Øª Ù…Ø¹ØªÙ…Ø¯Ø©",
    "Academic Group": "Ù…Ø¬Ù…ÙˆØ¹Ø© Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©",
    "Notting Hill College logo": "Ø´Ø¹Ø§Ø± Notting Hill College",
    "Academic Partner": "Ø´Ø±ÙŠÙƒ Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠ",
    "Think English logo": "Ø´Ø¹Ø§Ø± Think English",
    "Think English": "Think English",
    "Eton Academy logo": "Ø´Ø¹Ø§Ø± Eton Academy",
    "Partner Universities": "Ø¬Ø§Ù…Ø¹Ø§Øª Ø´Ø±ÙŠÙƒØ©",
    "Institutional Network": "Ø´Ø¨ÙƒØ© Ù…Ø¤Ø³Ø³ÙŠØ©",
    "View Our Partners": "Ø´Ø§Ù‡Ø¯ Ø´Ø±ÙƒØ§Ø¡Ù†Ø§",
    "Start Your Learning Journey with EACC": "Ø§Ø¨Ø¯Ø£ Ø±Ø­Ù„ØªÙƒ Ø§Ù„ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù…Ø¹ EACC",
    "Whether you want to improve your language skills, prepare for an international exam, support your child's development, access psychological services, or advance your organization, EACC is here to help you achieve your goals.": "Ø³ÙˆØ§Ø¡ Ø£Ø±Ø¯Øª ØªØ­Ø³ÙŠÙ† Ù…Ù‡Ø§Ø±Ø§ØªÙƒ Ø§Ù„Ù„ØºÙˆÙŠØ©ØŒ Ø£Ùˆ Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ø§Ø®ØªØ¨Ø§Ø± Ø¯ÙˆÙ„ÙŠØŒ Ø£Ùˆ Ø¯Ø¹Ù… ØªØ·ÙˆØ± Ø·ÙÙ„ÙƒØŒ Ø£Ùˆ Ø§Ù„Ø§Ø³ØªÙØ§Ø¯Ø© Ù…Ù† Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù†ÙØ³ÙŠØ©ØŒ Ø£Ùˆ ØªØ·ÙˆÙŠØ± Ù…Ø¤Ø³Ø³ØªÙƒØŒ ÙÙ€ EACC Ù‡Ù†Ø§ Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ Ø¹Ù„Ù‰ ØªØ­Ù‚ÙŠÙ‚ Ø£Ù‡Ø¯Ø§ÙÙƒ.",
    "Our team is ready to help you choose the service that best fits your needs.": "ÙØ±ÙŠÙ‚Ù†Ø§ Ø¬Ø§Ù‡Ø² Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ ÙÙŠ Ø§Ø®ØªÙŠØ§Ø± Ø§Ù„Ø®Ø¯Ù…Ø© Ø§Ù„Ø£Ù†Ø³Ø¨ Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§ØªÙƒ.",
    "EACC White Logo": "Ø´Ø¹Ø§Ø± EACC Ø§Ù„Ø£Ø¨ÙŠØ¶",
    "Language, wellbeing, and future skills for every stage of life.": "Ø§Ù„Ù„ØºØ© ÙˆØ§Ù„Ø±ÙØ§Ù‡ ÙˆÙ…Ù‡Ø§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ Ù„ÙƒÙ„ Ù…Ø±Ø­Ù„Ø© Ù…Ù† Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ø­ÙŠØ§Ø©.",
    "Helping learners and families grow with confidence since 1996.": "Ù†Ø³Ø§Ø¹Ø¯ Ø§Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† ÙˆØ§Ù„Ø£Ø³Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù†Ù…Ùˆ Ø¨Ø«Ù‚Ø© Ù…Ù†Ø° 1996.",
    "Explore": "Ø§Ø³ØªÙƒØ´Ù",
    "Resources": "Ø§Ù„Ù…ÙˆØ§Ø±Ø¯",
    "Consultation Request": "Ø·Ù„Ø¨ Ø§Ø³ØªØ´Ø§Ø±Ø©",
    "Alexandria, Egypt": "Ø§Ù„Ø¥Ø³ÙƒÙ†Ø¯Ø±ÙŠØ©ØŒ Ù…ØµØ±",
    "WhatsApp: +20 106 553 3240": "ÙˆØ§ØªØ³Ø§Ø¨: +20 106 553 3240",
    "Email: info@eacc-egy.com": "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ: info@eacc-egy.com",
    "Â© 2026 Egyptian American Cultural Center. All rights reserved.": "Â© 2026 Egyptian American Cultural Center. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©."
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
      ? 'EACC | Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ'
      : 'EACC | Egyptian American Cultural Center';

    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        isArabic
          ? 'ÙŠÙ‚Ø¯Ù… Ø§Ù„Ù…Ø±ÙƒØ² Ø§Ù„Ø«Ù‚Ø§ÙÙŠ Ø§Ù„Ù…ØµØ±ÙŠ Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠ ØªØ¹Ù„ÙŠÙ… Ù„ØºØ§Øª Ù…ØªÙ…ÙŠØ²Ù‹Ø§ØŒ ÙˆÙ…Ø®ÙŠÙ…Ø§ØªØŒ ÙˆØ¨Ø±Ø§Ù…Ø¬ ØªØ­Ø¶ÙŠØ± Ù„Ù„Ø§Ø®ØªØ¨Ø§Ø±Ø§ØªØŒ ÙˆØªØ¬Ø§Ø±Ø¨ ØªØ¹Ù„Ù… ØªÙØ§Ø¹Ù„ÙŠØ©.'
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
      mobileToggle.setAttribute('aria-label', isOpen ? 'Ø¥ØºÙ„Ø§Ù‚ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©' : 'ÙØªØ­ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©');
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
    if (button.hasAttribute('data-language-switch')) return;

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


/* --- Real EN/AR mirrored page switch --- */
(() => {
  if (window.__eaccMirroredLanguageSwitch) return;
  window.__eaccMirroredLanguageSwitch = true;

  function normalizePathname(pathname) {
    return decodeURIComponent(pathname || '/').replace(/\\/g, '/');
  }

  function getMirrorHref() {
    var pathname = normalizePathname(window.location.pathname);
    var search = window.location.search || '';
    var hash = window.location.hash || '';
    var isArabic = /^\/ar(\/|$)/i.test(pathname);

    if (window.location.protocol === 'file:') {
      var parts = pathname.split('/').filter(Boolean);
      var rootIndex = parts.lastIndexOf('EACC_WEBSITE_FINAL_VERSION');
      if (rootIndex !== -1) {
        var projectParts = parts.slice(rootIndex + 1);
        var fileModeArabic = projectParts[0] && projectParts[0].toLowerCase() === 'ar';
        var targetParts = fileModeArabic ? projectParts.slice(1) : ['ar'].concat(projectParts);
        if (!targetParts.length) targetParts = fileModeArabic ? ['index.html'] : ['ar', 'index.html'];
        var depthFromCurrent = Math.max(0, projectParts.length - 1);
        var prefix = depthFromCurrent ? '../'.repeat(depthFromCurrent) : '';
        return prefix + targetParts.join('/') + search + hash;
      }
    }

    var target = isArabic
      ? pathname.replace(/^\/ar\/?/i, '/') || '/index.html'
      : '/ar' + (pathname === '/' ? '/index.html' : pathname);
    return target.replace(/\/+/g, '/') + search + hash;
  }

  function syncLanguageSwitch() {
    var isArabic = /^\/ar(\/|$)/i.test(normalizePathname(window.location.pathname));
    document.querySelectorAll('[data-language-switch]').forEach(function (link) {
      link.setAttribute('href', getMirrorHref());
      link.setAttribute('aria-label', isArabic ? 'Switch website language to English' : 'Switch website language to Arabic');
      var label = link.querySelector('#languageToggleText, .eacc-lang-label');
      if (label) label.textContent = isArabic ? 'EN' : 'AR';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLanguageSwitch);
  } else {
    syncLanguageSwitch();
  }
  document.addEventListener('eacc:partials-loaded', syncLanguageSwitch);
})();


/* --- Local-first navigation bridge --- */
(() => {
  if (window.__eaccLocalNavInstalled) return;
  window.__eaccLocalNavInstalled = true;

  var localRouteMap = {
    '/': 'index.html',
    '/summer-camp-2026': 'summer-camp-2026.html',
    '/mindspace': 'mindspace.html',
    '/corporate-training': 'corporate-train.html',
    '/testing-centre': 'testing-centre.html',
    '/toefl': 'testing-centre/tofel.html',
    '/celi-cils': 'testing-centre/celi-cils.html',
    '/placement-test': 'testing-centre/placment-test.html',
    '/psychological-assessment': 'testing-centre/Psychological-assessment.html',
    '/language-academy': 'Our Services/langauge-academy/language-acad.html',
    '/kids-youth': 'Our Services/kids-youth.html',
    '/international-exams': 'Our Services/international-exams.html',
    '/online-languages': 'Our Services/online-lang.html',
    '/english': 'Our Services/langauge-academy/eng/eng.html',
    '/english-adults': 'Our Services/langauge-academy/eng/adults.html',
    '/english-youth': 'Our Services/langauge-academy/eng/youth.html',
    '/english-kids': 'Our Services/langauge-academy/eng/kids.html',
    '/german': 'Our Services/langauge-academy/german/german.html',
    '/french': 'Our Services/langauge-academy/french/french.html',
    '/italian': 'Our Services/langauge-academy/italian/italian.html',
    '/spanish': 'Our Services/langauge-academy/spanish/spanish.html',
    '/ielts': 'Our Services/int-exams/ielts.html',
    '/oet': 'Our Services/int-exams/oet.html',
    '/pte': 'Our Services/int-exams/pte.html',
    '/who-we-are': 'about-us/our-story.html',
    '/leadership': 'about-us/leadership.html',
    '/partners': 'about-us/partners.html',
    '/careers': 'about-us/application.html',
    '/contact-us': 'contact-us/visit-our-centre.html',
    '/contact': 'contact-us/visit-our-centre.html',
    '/request-info': 'contact-us/request-info.html',
    '/book-consultation': 'contact-us/book-cons.html',
    '/faqs': 'about-us/faq.html',
    '/language': 'Our Services/langauge-academy/language-acad.html',
    '/lang-form': 'lang-form.html',
    '/language-form': 'lang-form.html',
    '/privacy-policy': 'privacy.html',
    '/terms-and-conditions': 'terms.html',
    '/refund': 'refund.html'
  };

  function isExternalUrl(value) {
    return /^https?:\/\//i.test(value) || /^mailto:/i.test(value) || /^tel:/i.test(value);
  }

  function isLocalPreview() {
    return window.location.protocol === 'file:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';
  }

  function getFileModeRootPrefix() {
    if (window.location.protocol !== 'file:') return '';
    var parts = decodeURIComponent(window.location.pathname)
      .replace(/\\/g, '/')
      .split('/')
      .filter(Boolean);
    var rootIndex = parts.lastIndexOf('EACC_WEBSITE_FINAL_VERSION');
    if (rootIndex === -1) return '';
    var depthFromRoot = parts.length - rootIndex - 2;
    return depthFromRoot > 0 ? '../'.repeat(depthFromRoot) : '';
  }

  function toProjectPath(path) {
    if (!path || path.charAt(0) === '#') return path;
    if (isExternalUrl(path)) return path;
    if (path.charAt(0) === '/') return path;
    if (window.location.protocol === 'file:') return getFileModeRootPrefix() + path;
    return '/' + path.replace(/^\/+/, '');
  }

  function splitHash(value) {
    var parts = String(value || '').split('#');
    return { path: parts.shift() || '', hash: parts.length ? '#' + parts.join('#') : '' };
  }

  function normalizeLocalPath(value) {
    if (!value) return '';
    value = String(value).trim();
    if (!value || value.charAt(0) === '#') return value;
    if (isExternalUrl(value)) return value;
    var split = splitHash(value);
    var path = split.path || '';
    var hash = split.hash || '';
    if (path.charAt(0) === '/') {
      path = localRouteMap[path] || localRouteMap[path.replace(/\/$/, '')] || path.replace(/^\//, '') || 'index.html';
    }
    if (!path) return hash;
    return toProjectPath(path) + hash;
  }

  function normalizeHrefOnly(value) {
    if (!value) return '';
    value = String(value).trim();
    if (!value || value.charAt(0) === '#' || isExternalUrl(value)) return value;
    if (value.charAt(0) === '/') return normalizeLocalPath(value);
    return value;
  }

  function resolveLocalHref(a) {
    if (!a) return '';
    var local = a.getAttribute('data-local-link');
    var href = a.getAttribute('href');
    if (a.hasAttribute('data-language-switch')) return normalizeHrefOnly(href || '');
    if (local) return normalizeLocalPath(local);
    return normalizeHrefOnly(href || '');
  }

  function shouldIgnore(a, destination) {
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return true;
    if (!destination || destination.charAt(0) === '#') return true;
    return /^mailto:/i.test(destination) || /^tel:/i.test(destination) || /^javascript:/i.test(destination);
  }

  function normalizeLinks() {
    document.querySelectorAll('a[href], a[data-local-link]').forEach(function (a) {
      var destination = resolveLocalHref(a);
      if (shouldIgnore(a, destination)) return;
      var href = a.getAttribute('href') || '';
      if (a.hasAttribute('data-local-link') || href.charAt(0) === '/') {
        a.setAttribute('href', destination);
      }
    });
  }

  document.addEventListener('click', function (event) {
    var a = event.target && event.target.closest ? event.target.closest('a') : null;
    if (
      a &&
      a.matches('.dropdown > a') &&
      window.matchMedia('(max-width: 768px)').matches &&
      a.closest('header nav.nav-links')
    ) {
      return;
    }

    var destination = resolveLocalHref(a);
    if (shouldIgnore(a, destination)) return;

    if (isExternalUrl(destination)) return;

    event.preventDefault();
    event.stopPropagation();
    if (destination.charAt(0) === '#') {
      var target = document.querySelector(destination);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.href = destination;
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', normalizeLinks);
  } else {
    normalizeLinks();
  }
  document.addEventListener('eacc:partials-loaded', normalizeLinks);
})();


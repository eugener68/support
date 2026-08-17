(function () {
  var STORAGE_KEY = "er68-lang";

  var strings = {
    en: {
      "common.triviaName": "AI Trivia Night",
      "common.learnMore": "Learn more →",
      "common.appStore": "Download on the App Store",
      "common.googlePlay": "Get it on Google Play",
      "common.contactSupport": "Contact support",
      "common.sendFeedback": "Send feedback",
      "common.getInTouch": "Get in touch",
      "nav.aria": "Main navigation",
      "nav.home": "Home",
      "nav.support": "Support",
      "nav.lang": "Language",
      "footer.copyright": "© 2026 EugeneR68 Software LLC. All rights reserved.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.contact": "Contact",

      "index.title": "EugeneR68 Software LLC — Apple & Android Application Development",
      "index.description": "EugeneR68 Software LLC builds thoughtful, practical, AI-powered applications for Apple and Android platforms.",
      "index.heroEyebrow": "New software business • Two Apple apps live",
      "index.heroTitle": "Application development",
      "index.heroTitle2": "for Apple & Android.",
      "index.heroLead": "EugeneR68 Software LLC builds thoughtful, modern applications for iPhone, iPad, Android, and the web — from AI-powered entertainment to practical digital libraries and productivity tools.",
      "index.viewApps": "View launched apps",
      "index.previewAria": "Product preview",
      "index.screenKicker": "Product Studio",
      "index.screenMeta": "iOS • Android • AI",
      "index.screenTitle": "Useful apps with a little bit of magic.",
      "index.screenBody": "Clean interfaces, practical workflows, and intelligent features designed to make everyday digital experiences simpler, smarter, and more enjoyable.",
      "index.whatTitle": "What we build",
      "index.whatLead": "Independent software with professional polish: mobile apps, AI-assisted products, cloud-backed services, and practical tools that solve real user problems.",
      "index.card1Title": "Apple & Android apps",
      "index.card1Body": "Polished mobile experiences for iPhone, iPad, and Android platforms.",
      "index.card2Title": "AI-powered features",
      "index.card2Body": "Personalization, content generation, smart workflows, and adaptive experiences.",
      "index.card3Title": "Cloud & backend systems",
      "index.card3Body": "APIs, app services, data flows, subscriptions, and deployment-ready cloud architecture.",
      "index.appsTitle": "Launched applications",
      "index.appsLead": "The company is new, but the product work has already begun — with two applications live on Apple and Google platforms.",
      "index.appTrivia": "AI-powered trivia for solo players, families, friends, and party hosts.",
      "index.appEbook": "An OPDS catalog browser, eBook library, and EPUB/PDF reader.",
      "index.noticeTitle": "Small company. Serious software.",
      "index.noticeBody": "EugeneR68 Software LLC is focused on building attractive, reliable, user-friendly applications for modern mobile platforms — with special attention to AI, content, entertainment, reading, and productivity.",

      "trivia.title": "AI Trivia Night — AI Trivia That Gets You Thinking",
      "trivia.description": "AI-powered trivia for solo players, families, friends, and party hosts.",
      "trivia.heroEyebrow": "AI-powered trivia • iPhone, iPad & Android",
      "trivia.heroTitle2": "Smarter questions. Limitless fun.",
      "trivia.heroLead": "Turn any night into a trivia night. Create personalized quizzes by theme, difficulty, and age group — then play solo, with family, or as the host of a full party game.",
      "trivia.screenMeta": "Fresh every game",
      "trivia.screenTitle": "No recycled trivia.",
      "trivia.screenBody": "Choose your topic, tune the difficulty, set the age group, and let AI build questions tailored to your audience.",
      "trivia.screenFeatureTitle": "Team or Solo",
      "trivia.screenFeatureBody": "Host the room or challenge yourself.",
      "trivia.sectionTitle": "Built for real game nights",
      "trivia.sectionLead": "Whether you are entertaining friends, playing with kids, or sharpening your own brain, AI Trivia Night adapts the experience to the moment.",
      "trivia.card1Title": "Personalized quizzes",
      "trivia.card1Body": "Choose themes, difficulty levels, and age group — the app adapts questions on the fly using AI.",
      "trivia.card2Title": "Always original",
      "trivia.card2Body": "No repeats, no memorization, no stale question packs. Every game can feel fresh.",
      "trivia.card3Title": "Party mode & solo play",
      "trivia.card3Body": "Challenge yourself or compete with friends. The quiz scales to match your crowd.",
      "trivia.noticeTitle": "Simple, fun interface",
      "trivia.noticeBody": "Minimalist design, zero distractions — just questions, answers, explanations, scores, and bragging rights.",

      "ebook.title": "EbookLib — OPDS Catalog Browser, Library and Reader",
      "ebook.description": "Browse OPDS catalogs, download books, and read EPUB or PDF files across Apple devices.",
      "ebook.heroEyebrow": "OPDS catalog browser • Library • Reader",
      "ebook.heroTitle2": "Your eBook catalogs, library, and reader in one place.",
      "ebook.heroLead": "Browse OPDS catalogs, download books, organize your library, and read EPUB or PDF files across your Apple devices.",
      "ebook.screenTitle": "Find. Download. Read.",
      "ebook.screenBody": "A modern library workflow for people who use OPDS catalogs and want their books under one roof.",
      "ebook.screenFeatureTitle": "iCloud sync",
      "ebook.screenFeatureBody": "Your catalog list and downloaded books stay available across iPhone and iPad.",
      "ebook.sectionTitle": "Key features",
      "ebook.sectionLead": "Designed for readers who want control over catalogs, downloads, formats, and reading progress.",
      "ebook.f1Title": "OPDS catalog management",
      "ebook.f1Body": "Add, edit, delete, browse, and search OPDS catalogs from your own list or a preset web list.",
      "ebook.f2Title": "Library tab",
      "ebook.f2Body": "View, search, sort, and organize downloaded books in one clean place.",
      "ebook.f3Title": "Built-in reading",
      "ebook.f3Body": "Open EPUB and PDF books in the application reader, or choose Apple Books for EPUB files.",
      "ebook.f4Title": "Reading progress",
      "ebook.f4Body": "Reopen a book from where you stopped and manage your active reading list.",
      "ebook.f5Title": "Format flexibility",
      "ebook.f5Body": "Download EPUB, PDF, and FB2 files. FB2 can be opened in the reader app of your choice.",
      "ebook.f6Title": "iCloud integration",
      "ebook.f6Body": "Keep your catalog list and downloaded books synchronized across iPhone and iPad.",
      "ebook.noticeTitle": "Everything for catalog-based reading",
      "ebook.noticeBody": "No need to jump between apps just to discover, download, organize, and read. EbookLib brings the full flow together.",

      "privacy.title": "Privacy Policy — EugeneR68 Software LLC",
      "privacy.description": "Privacy Policy for EugeneR68 Software LLC apps.",
      "privacy.heroEyebrow": "Privacy Policy",
      "privacy.heroTitle": "Privacy matters.",
      "privacy.heroTitle2": "Simple, clear, and respectful.",
      "privacy.heroLead": "Last updated: July 26, 2025",
      "privacy.boxTitle": "Privacy Policy",
      "privacy.p1": "This app does not collect, store, or share any personal information.",
      "privacy.p2": "We do not use third-party analytics, advertising, or tracking tools.",
      "privacy.p3": "If you have any questions, please <a class=\"app-link\" href=\"feedback-form.html\">contact us</a>.",

      "terms.title": "Terms of Service — AI Trivia Night",
      "terms.description": "Terms of Service for AI Trivia Night.",
      "terms.heroEyebrow": "Terms of Service",
      "terms.heroTitle": "Terms of Service",
      "terms.heroTitle2": "For AI Trivia Night.",
      "terms.heroLead": "Effective Date: July 14, 2025",
      "terms.intro": "Welcome to AI Trivia Night, an AI-powered quiz generation app. By using our app, you agree to the following terms. Please read them carefully.",
      "terms.h1": "1. Subscriptions and In-App Purchases",
      "terms.p1": "AI Trivia Night may offer subscriptions and in-app purchases. Available options may include weekly, monthly, yearly, or limited-time access passes, depending on the platform and current app configuration.",
      "terms.p2": "Payment will be charged to your Apple ID or Google account at the confirmation of purchase.",
      "terms.hRenew": "Auto-renewal",
      "terms.pRenew1": "Auto-renewable subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.",
      "terms.pRenew2": "Your account may be charged for renewal within 24 hours prior to the end of the current period, at the cost of the chosen plan.",
      "terms.hManage": "Managing purchases",
      "terms.pManage1": "You can manage or cancel subscriptions through your App Store or Google Play account settings after purchase.",
      "terms.pManage2": "Refunds are handled by Apple or Google and are subject to their refund policies.",
      "terms.h2": "2. Use of the App",
      "terms.pUse": "AI Trivia Night is intended for entertainment purposes. You must not use the app for any unlawful or harmful activities.",
      "terms.h3": "3. User Content",
      "terms.pContent": "Any content you generate or submit via the app remains your responsibility. We do not claim ownership of your content, but we may use aggregated, anonymized usage data to improve the app.",
      "terms.h4": "4. Changes to the Terms",
      "terms.pChanges": "We may update these Terms of Service from time to time. We will notify you of significant changes via the app or by email when appropriate.",
      "terms.h5": "5. Contact Us",
      "terms.pContact": "If you have questions about these terms or the app, please <a class=\"app-link\" href=\"feedback-form.html\">contact us</a>. Also see our <a class=\"app-link\" href=\"privacy.html\">Privacy Policy</a>.",

      "support.title": "Contact Support — EugeneR68 Software LLC",
      "support.description": "Contact support for EugeneR68 Software LLC apps.",
      "support.heroEyebrow": "Support & feedback",
      "support.heroTitle": "Contact support",
      "support.heroTitle2": "Questions, issues, ideas.",
      "support.heroLead": "Need help with AI Trivia Night, EbookLib, or another EugeneR68 Software LLC product? Tell us what happened and how we can help.",
      "support.infoTitle": "What to include",
      "support.infoLead": "The more detail you provide, the faster we can understand the issue. Tiny bug reports are good. Specific bug reports are beautiful.",
      "support.q1Title": "App name",
      "support.q1Body": "AI Trivia Night, EbookLib, or another product.",
      "support.q2Title": "Device & version",
      "support.q2Body": "iPhone, iPad, Android device, OS version, and app version if available.",
      "support.q3Title": "What happened",
      "support.q3Body": "Steps to reproduce the issue, screenshots, or the exact error message.",
      "support.formTitle": "Contact Support",
      "support.formSubtitle": "This secure form uses your existing Formspree endpoint and Google reCAPTCHA verification.",
      "support.labelName": "Your Name",
      "support.labelEmail": "Your Email",
      "support.labelMessage": "Issue / Feature Request",
      "support.submit": "Send",
      "support.fineprint": "Protected by Google reCAPTCHA. Your message will be submitted through the support form.",

      "animood.title": "AniMood – Your mood, your anime self",
      "animood.tagline": "Your Mood, Anime-fied!",
      "animood.aboutTitle": "About AniMood",
      "animood.aboutBody": "AniMood is a magical AI-powered app that turns your photo into a popular Anime studio-style avatar that reflects your current mood. Whether you’re happy, sad, angry, or excited — just pick a photo, select how you feel, and let the AniMood magic do the rest.",
      "animood.featuresTitle": "Key Features",
      "animood.f1": "Take a photo or choose one from your gallery",
      "animood.f2": "Select your current mood from a simple list",
      "animood.f3": "AI transforms your photo into a popular Anime studio style' avatar",
      "animood.f4": "Supports a variety of moods: happy, sad, angry, excited, and more",
      "animood.f5": "Save or share your mood avatar with friends",
      "animood.f6": "Powered by a custom-trained model for authentic animation-inspired results",
      "animood.startTitle": "Get Started",
      "animood.startBody": "Download AniMood from the App Store and express yourself in the most enchanting way possible. It’s your face, your feelings — reimagined through the lens of magical animation.",
      "animood.footer": "© 2025 EugeneR. All rights reserved.",

      "spb.title": "Simple Playlist Maker",
      "spb.sub": "Auto-generate playlists for Spotify from your artist list",
      "spb.aboutTitle": "About Playlist Maker",
      "spb.aboutBody": "Playlist Maker is an iOS app that creates playlists from a user-provided list of artists. These playlists could be imported to user's personal Spotify account You can type artist names manually, paste a list from the clipboard, or import artists from CSV or TXT files. The app helps you control variety and structure, so your playlist feels balanced instead of repetitive.",
      "spb.featuresTitle": "Key Features",
      "spb.f1": "Create playlists from an artist list (manual entry, paste, or CSV/TXT import)",
      "spb.f2": "Set the total number of tracks",
      "spb.f3": "Limit tracks per artist to keep a good mix",
      "spb.f4": "Shuffle the playlist for variety",
      "spb.f5": "Prefer original versions when available",
      "spb.f6": "Auto-generate playlist names with an optional current date",
      "spb.f7": "Dry Run mode: preview the track list without creating a playlist on Spotify",
      "spb.f8": "Localization: the app follows your iPhone language (Russian supported)",
      "spb.howTitle": "How It Works",
      "spb.howBody": "First, sign in to your Spotify account. Then choose your playlist settings, enter a playlist name (optionally with today’s date), and run a Dry Run to review the generated track list. If everything looks right, create the playlist in Spotify and start listening.",
      "spb.privacyTitle": "Privacy",
      "spb.privacyBody": "Your Spotify account data is not stored or shared by the app. Authentication is used only to create playlists in your own Spotify account.",
      "spb.note": "Spotify is a trademark of Spotify AB. This app is not affiliated with or endorsed by Spotify.",
      "spb.startTitle": "Get Started",
      "spb.startBody": "Download Simple Playlist Maker from the Apple App Store and build playlists from your artist lists in seconds.",
      "spb.footer": "© 2025 Eugene Roitberg. All rights reserved."
    },
    ru: {
      "common.triviaName": "КвИИз",
      "common.learnMore": "Подробнее →",
      "common.appStore": "Скачать в App Store",
      "common.googlePlay": "Скачать в Google Play",
      "common.contactSupport": "Связаться с поддержкой",
      "common.sendFeedback": "Отправить отзыв",
      "common.getInTouch": "Связаться с нами",
      "nav.aria": "Основная навигация",
      "nav.home": "Главная",
      "nav.support": "Поддержка",
      "nav.lang": "Язык",
      "footer.copyright": "© 2026 EugeneR68 Software LLC. Все права защищены.",
      "footer.privacy": "Конфиденциальность",
      "footer.terms": "Условия",
      "footer.contact": "Контакты",

      "index.title": "EugeneR68 Software LLC — разработка приложений для Apple и Android",
      "index.description": "EugeneR68 Software LLC создаёт продуманные практичные приложения с ИИ для платформ Apple и Android.",
      "index.heroEyebrow": "Новая софтверная компания • Два приложения уже в Apple",
      "index.heroTitle": "Разработка приложений",
      "index.heroTitle2": "для Apple и Android.",
      "index.heroLead": "EugeneR68 Software LLC создаёт продуманные современные приложения для iPhone, iPad, Android и веба — от развлечений на базе ИИ до удобных электронных библиотек и инструментов для продуктивности.",
      "index.viewApps": "Смотреть приложения",
      "index.previewAria": "Превью продукта",
      "index.screenKicker": "Студия продуктов",
      "index.screenMeta": "iOS • Android • ИИ",
      "index.screenTitle": "Полезные приложения с каплей магии.",
      "index.screenBody": "Чистый интерфейс, удобные сценарии и умные функции, которые делают повседневный цифровой опыт проще, умнее и приятнее.",
      "index.whatTitle": "Что мы создаём",
      "index.whatLead": "Независимый софт с профессиональной отделкой: мобильные приложения, продукты с ИИ, облачные сервисы и практичные инструменты, которые решают реальные задачи.",
      "index.card1Title": "Приложения для Apple и Android",
      "index.card1Body": "Отточенный мобильный опыт для iPhone, iPad и платформ Android.",
      "index.card2Title": "Функции на базе ИИ",
      "index.card2Body": "Персонализация, генерация контента, умные сценарии и адаптивный опыт.",
      "index.card3Title": "Облако и серверная часть",
      "index.card3Body": "API, сервисы приложений, потоки данных, подписки и готовая к запуску облачная архитектура.",
      "index.appsTitle": "Опубликованные приложения",
      "index.appsLead": "Компания молодая, но продукты уже есть — два приложения доступны на платформах Apple и Google.",
      "index.appTrivia": "Викторина на базе ИИ для одиночной игры, семьи, друзей и ведущих вечеринок.",
      "index.appEbook": "Браузер OPDS-каталогов, библиотека электронных книг и читалка EPUB/PDF.",
      "index.noticeTitle": "Небольшая компания. Серьёзный софт.",
      "index.noticeBody": "EugeneR68 Software LLC создаёт привлекательные, надёжные и удобные приложения для современных мобильных платформ — с особым вниманием к ИИ, контенту, развлечениям, чтению и продуктивности.",

      "trivia.title": "КвИИз — викторина с ИИ, которая заставляет думать",
      "trivia.description": "Викторина на базе ИИ для одиночной игры, семьи, друзей и ведущих вечеринок.",
      "trivia.heroEyebrow": "Викторина на базе ИИ • iPhone, iPad и Android",
      "trivia.heroTitle2": "Умные вопросы. Бесконечное веселье.",
      "trivia.heroLead": "Превратите любой вечер в КвИИз. Создавайте персональные викторины по теме, сложности и возрасту — играйте в одиночку, с семьёй или как ведущий полноценной вечеринки.",
      "trivia.screenMeta": "Новая игра каждый раз",
      "trivia.screenTitle": "Никаких повторных вопросов.",
      "trivia.screenBody": "Выберите тему, настройте сложность и возраст — ИИ составит вопросы под вашу аудиторию.",
      "trivia.screenFeatureTitle": "Команда или соло",
      "trivia.screenFeatureBody": "Ведите игру или бросьте вызов себе.",
      "trivia.sectionTitle": "Для настоящих игровых вечеров",
      "trivia.sectionLead": "Друзья, дети или тренировка ума — КвИИз подстраивается под момент.",
      "trivia.card1Title": "Персональные викторины",
      "trivia.card1Body": "Тема, сложность, возраст — приложение адаптирует вопросы на лету с помощью ИИ.",
      "trivia.card2Title": "Всегда оригинально",
      "trivia.card2Body": "Без повторов, зубрёжки и устаревших пакетов вопросов. Каждая игра может быть новой.",
      "trivia.card3Title": "Режим вечеринки и соло",
      "trivia.card3Body": "Играйте сами или соревнуйтесь с друзьями. Викторина масштабируется под компанию.",
      "trivia.noticeTitle": "Простой и весёлый интерфейс",
      "trivia.noticeBody": "Минимум отвлечений — только вопросы, ответы, пояснения, очки и повод похвастаться.",

      "ebook.title": "EbookLib — браузер OPDS-каталогов, библиотека и читалка",
      "ebook.description": "Просматривайте OPDS-каталоги, скачивайте книги и читайте EPUB или PDF на устройствах Apple.",
      "ebook.heroEyebrow": "Браузер OPDS-каталогов • Библиотека • Читалка",
      "ebook.heroTitle2": "Каталоги, библиотека и читалка — в одном месте.",
      "ebook.heroLead": "Просматривайте OPDS-каталоги, скачивайте книги, организуйте библиотеку и читайте EPUB или PDF на устройствах Apple.",
      "ebook.screenTitle": "Найти. Скачать. Читать.",
      "ebook.screenBody": "Современный сценарий для тех, кто пользуется OPDS-каталогами и хочет держать книги в одном месте.",
      "ebook.screenFeatureTitle": "Синхронизация через iCloud",
      "ebook.screenFeatureBody": "Список каталогов и скачанные книги доступны на iPhone и iPad.",
      "ebook.sectionTitle": "Главные возможности",
      "ebook.sectionLead": "Для читателей, которым важен контроль над каталогами, загрузками, форматами и прогрессом чтения.",
      "ebook.f1Title": "Управление OPDS-каталогами",
      "ebook.f1Body": "Добавляйте, редактируйте, удаляйте, просматривайте и ищите OPDS-каталоги — свои или из готового списка.",
      "ebook.f2Title": "Вкладка «Библиотека»",
      "ebook.f2Body": "Просматривайте, ищите, сортируйте и организуйте скачанные книги в одном месте.",
      "ebook.f3Title": "Встроенное чтение",
      "ebook.f3Body": "Открывайте EPUB и PDF в приложении или выбирайте Apple Books для EPUB.",
      "ebook.f4Title": "Прогресс чтения",
      "ebook.f4Body": "Продолжайте с того места, где остановились, и управляйте списком активного чтения.",
      "ebook.f5Title": "Гибкость форматов",
      "ebook.f5Body": "Скачивайте EPUB, PDF и FB2. FB2 можно открыть в выбранной читалке.",
      "ebook.f6Title": "Интеграция с iCloud",
      "ebook.f6Body": "Список каталогов и скачанные книги синхронизируются между iPhone и iPad.",
      "ebook.noticeTitle": "Всё для чтения из каталогов",
      "ebook.noticeBody": "Не нужно прыгать между приложениями, чтобы найти, скачать, упорядочить и прочитать. EbookLib собирает весь процесс вместе.",

      "privacy.title": "Политика конфиденциальности — EugeneR68 Software LLC",
      "privacy.description": "Политика конфиденциальности приложений EugeneR68 Software LLC.",
      "privacy.heroEyebrow": "Политика конфиденциальности",
      "privacy.heroTitle": "Конфиденциальность важна.",
      "privacy.heroTitle2": "Просто, ясно и с уважением.",
      "privacy.heroLead": "Последнее обновление: 26 июля 2025",
      "privacy.boxTitle": "Политика конфиденциальности",
      "privacy.p1": "Это приложение не собирает, не хранит и не передаёт персональные данные.",
      "privacy.p2": "Мы не используем стороннюю аналитику, рекламу и инструменты отслеживания.",
      "privacy.p3": "Если у вас есть вопросы, пожалуйста, <a class=\"app-link\" href=\"feedback-form.html\">свяжитесь с нами</a>.",

      "terms.title": "Условия использования — КвИИз",
      "terms.description": "Условия использования КвИИз.",
      "terms.heroEyebrow": "Условия использования",
      "terms.heroTitle": "Условия использования",
      "terms.heroTitle2": "Для КвИИз.",
      "terms.heroLead": "Дата вступления в силу: 14 июля 2025",
      "terms.intro": "Добро пожаловать в КвИИз — приложение для генерации викторин на базе ИИ. Используя приложение, вы соглашаетесь с этими условиями. Пожалуйста, прочитайте их внимательно.",
      "terms.h1": "1. Подписки и встроенные покупки",
      "terms.p1": "КвИИз может предлагать подписки и встроенные покупки. Доступные варианты могут включать недельную, месячную, годовую подписку или временный доступ — в зависимости от платформы и текущей конфигурации приложения.",
      "terms.p2": "Оплата списывается с вашего Apple ID или аккаунта Google после подтверждения покупки.",
      "terms.hRenew": "Автопродление",
      "terms.pRenew1": "Автоматически продлеваемые подписки продлеваются, если автопродление не отключено как минимум за 24 часа до окончания текущего периода.",
      "terms.pRenew2": "С вашего аккаунта может быть списана плата за продление в течение 24 часов до окончания текущего периода по цене выбранного плана.",
      "terms.hManage": "Управление покупками",
      "terms.pManage1": "Подписками можно управлять или отменять их в настройках аккаунта App Store или Google Play после покупки.",
      "terms.pManage2": "Возвраты обрабатываются Apple или Google в соответствии с их политиками возврата.",
      "terms.h2": "2. Использование приложения",
      "terms.pUse": "КвИИз предназначен для развлечения. Нельзя использовать приложение для незаконных или вредоносных действий.",
      "terms.h3": "3. Пользовательский контент",
      "terms.pContent": "Любой контент, который вы создаёте или отправляете через приложение, остаётся вашей ответственностью. Мы не претендуем на права на ваш контент, но можем использовать агрегированные обезличенные данные об использовании для улучшения приложения.",
      "terms.h4": "4. Изменения условий",
      "terms.pChanges": "Мы можем время от времени обновлять эти Условия использования. О существенных изменениях мы сообщим в приложении или по электронной почте, когда это уместно.",
      "terms.h5": "5. Связаться с нами",
      "terms.pContact": "Если у вас есть вопросы об этих условиях или приложении, пожалуйста, <a class=\"app-link\" href=\"feedback-form.html\">свяжитесь с нами</a>. Также см. нашу <a class=\"app-link\" href=\"privacy.html\">Политику конфиденциальности</a>.",

      "support.title": "Связаться с поддержкой — EugeneR68 Software LLC",
      "support.description": "Связаться с поддержкой приложений EugeneR68 Software LLC.",
      "support.heroEyebrow": "Поддержка и отзывы",
      "support.heroTitle": "Связаться с поддержкой",
      "support.heroTitle2": "Вопросы, проблемы, идеи.",
      "support.heroLead": "Нужна помощь с КвИИз, EbookLib или другим продуктом EugeneR68 Software LLC? Расскажите, что произошло и чем мы можем помочь.",
      "support.infoTitle": "Что указать",
      "support.infoLead": "Чем больше деталей, тем быстрее мы разберёмся. Короткие сообщения полезны. Конкретные — ещё лучше.",
      "support.q1Title": "Название приложения",
      "support.q1Body": "КвИИз, EbookLib или другой продукт.",
      "support.q2Title": "Устройство и версия",
      "support.q2Body": "iPhone, iPad, устройство Android, версия ОС и версия приложения, если известна.",
      "support.q3Title": "Что произошло",
      "support.q3Body": "Шаги для воспроизведения, скриншоты или точный текст ошибки.",
      "support.formTitle": "Связаться с поддержкой",
      "support.formSubtitle": "Эта защищённая форма использует ваш текущий endpoint Formspree и проверку Google reCAPTCHA.",
      "support.labelName": "Ваше имя",
      "support.labelEmail": "Ваш email",
      "support.labelMessage": "Проблема / предложение",
      "support.submit": "Отправить",
      "support.fineprint": "Защищено Google reCAPTCHA. Сообщение будет отправлено через форму поддержки.",

      "animood.title": "AniMood – ваше настроение, ваше аниме-я",
      "animood.tagline": "Ваше настроение в стиле аниме!",
      "animood.aboutTitle": "О AniMood",
      "animood.aboutBody": "AniMood — приложение с ИИ, которое превращает ваше фото в аватар в стиле популярной аниме-студии и отражает ваше текущее настроение. Радость, грусть, злость или восторг — выберите фото, укажите, как вы себя чувствуете, и пусть AniMood сделает остальное.",
      "animood.featuresTitle": "Ключевые возможности",
      "animood.f1": "Сделайте фото или выберите его из галереи",
      "animood.f2": "Выберите текущее настроение из простого списка",
      "animood.f3": "ИИ превращает фото в аватар в стиле популярной аниме-студии",
      "animood.f4": "Разные настроения: радость, грусть, злость, восторг и другие",
      "animood.f5": "Сохраняйте аватар или делитесь им с друзьями",
      "animood.f6": "На основе собственной обученной модели для узнаваемого анимационного стиля",
      "animood.startTitle": "Начало работы",
      "animood.startBody": "Скачайте AniMood из App Store и выразите себя самым волшебным способом. Это ваше лицо и ваши чувства — заново увиденные через призму волшебной анимации.",
      "animood.footer": "© 2025 EugeneR. Все права защищены.",

      "spb.title": "Simple Playlist Maker",
      "spb.sub": "Автоматическое создание плейлистов для Spotify по списку исполнителей",
      "spb.aboutTitle": "О Playlist Maker",
      "spb.aboutBody": "Playlist Maker — iOS-приложение, которое создаёт плейлисты из списка исполнителей. Эти плейлисты можно импортировать в личный аккаунт Spotify. Вы можете ввести имена исполнителей вручную, вставить список из буфера обмена или импортировать исполнителей из файлов CSV или TXT. Приложение помогает контролировать разнообразие и структуру, чтобы плейлист звучал сбалансированно, а не однообразно.",
      "spb.featuresTitle": "Ключевые возможности",
      "spb.f1": "Создание плейлистов из списка исполнителей (ручной ввод, вставка или импорт CSV/TXT)",
      "spb.f2": "Задать общее число треков",
      "spb.f3": "Ограничить число треков на исполнителя, чтобы сохранить микс",
      "spb.f4": "Перемешать плейлист для разнообразия",
      "spb.f5": "Предпочитать оригинальные версии, если они доступны",
      "spb.f6": "Автоматически генерировать названия плейлистов с опциональной текущей датой",
      "spb.f7": "Режим Dry Run: предварительный просмотр списка треков без создания плейлиста в Spotify",
      "spb.f8": "Локализация: приложение следует языку iPhone (поддерживается русский)",
      "spb.howTitle": "Как это работает",
      "spb.howBody": "Сначала войдите в аккаунт Spotify. Затем выберите настройки плейлиста, введите название (при желании с сегодняшней датой) и запустите Dry Run, чтобы просмотреть список треков. Если всё в порядке — создайте плейлист в Spotify и слушайте.",
      "spb.privacyTitle": "Конфиденциальность",
      "spb.privacyBody": "Данные вашего аккаунта Spotify не хранятся и не передаются приложением. Авторизация нужна только для создания плейлистов в вашем аккаунте Spotify.",
      "spb.note": "Spotify является товарным знаком Spotify AB. Это приложение не связано со Spotify и не одобрено им.",
      "spb.startTitle": "Начало работы",
      "spb.startBody": "Скачайте Simple Playlist Maker из Apple App Store и собирайте плейлисты из списков исполнителей за секунды.",
      "spb.footer": "© 2025 Eugene Roitberg. Все права защищены."
    }
  };

  function browserPrefersRussian() {
    var list = [];
    if (navigator.languages && navigator.languages.length) {
      list = navigator.languages;
    } else if (navigator.language) {
      list = [navigator.language];
    }
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").toLowerCase();
      if (code === "ru" || code.indexOf("ru-") === 0) return true;
    }
    return false;
  }

  function detectLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var fromQuery = params.get("lang");
      if (fromQuery === "ru" || fromQuery === "en") return fromQuery;
    } catch (e) {}

    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "ru" || stored === "en") return stored;
    } catch (e2) {}

    return browserPrefersRussian() ? "ru" : "en";
  }

  function t(lang, key) {
    var table = strings[lang] || strings.en;
    if (table[key] != null) return table[key];
    return strings.en[key];
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n"));
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n-html"));
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n-content"));
      if (value != null) el.setAttribute("content", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n-alt"));
      if (value != null) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n-aria-label"));
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = t(lang, el.getAttribute("data-i18n-placeholder"));
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    var switcher = document.querySelector(".lang-switcher");
    if (switcher) switcher.setAttribute("aria-label", t(lang, "nav.lang"));
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    apply(lang);
  }

  function injectStyles() {
    if (document.getElementById("er68-i18n-styles")) return;
    var style = document.createElement("style");
    style.id = "er68-i18n-styles";
    style.textContent =
      ".header-end{display:flex;align-items:center;gap:16px;margin-left:auto;flex:0 0 auto;}" +
      ".lang-switcher{display:inline-flex;align-items:center;gap:2px;padding:4px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(255,255,255,.07);flex:0 0 auto;}" +
      ".lang-switcher button{appearance:none;width:auto!important;min-width:0;margin:0!important;border:0!important;background:transparent!important;color:rgba(247,248,255,.62)!important;font:inherit!important;font-size:13px!important;font-weight:700!important;letter-spacing:.04em;min-height:32px!important;height:32px;padding:0 10px!important;border-radius:999px!important;box-shadow:none!important;cursor:pointer;transform:none!important;}" +
      ".lang-switcher button[aria-pressed=\"true\"]{background:#fff!important;color:#09111f!important;}" +
      ".lang-switcher--overlay{position:absolute;top:16px;right:16px;z-index:20;background:rgba(11,16,32,.82);backdrop-filter:blur(12px);}" +
      ".lang-switcher--fixed{position:fixed;top:12px;right:12px;z-index:40;background:rgba(11,16,32,.9);backdrop-filter:blur(12px);}" +
      "@media (max-width:900px){.header-end nav{display:none;}}";
    document.head.appendChild(style);
  }

  function createSwitcher(lang) {
    var switcher = document.createElement("div");
    switcher.className = "lang-switcher";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", t(lang, "nav.lang"));
    ["en", "ru"].forEach(function (code) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-set-lang", code);
      btn.setAttribute("aria-pressed", code === lang ? "true" : "false");
      btn.textContent = code.toUpperCase();
      btn.addEventListener("click", function () {
        setLang(code);
      });
      switcher.appendChild(btn);
    });
    return switcher;
  }

  function mountSwitcher(lang) {
    if (document.querySelector(".lang-switcher")) return;
    injectStyles();
    var switcher = createSwitcher(lang);
    var brandedHeader = document.querySelector(".page > header");
    if (brandedHeader) {
      var nav = brandedHeader.querySelector("nav");
      var wrap = document.createElement("div");
      wrap.className = "header-end";
      if (nav) {
        nav.replaceWith(wrap);
        wrap.appendChild(nav);
        wrap.appendChild(switcher);
      } else {
        wrap.appendChild(switcher);
        brandedHeader.appendChild(wrap);
      }
      return;
    }

    var header = document.querySelector("header");
    if (header) {
      if (window.getComputedStyle(header).position === "static") {
        header.style.position = "relative";
      }
      switcher.classList.add("lang-switcher--overlay");
      header.appendChild(switcher);
      return;
    }

    switcher.classList.add("lang-switcher--fixed");
    document.body.appendChild(switcher);
  }

  function init() {
    var lang = detectLang();
    mountSwitcher(lang);
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

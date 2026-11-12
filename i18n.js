/* i18n.js — English (default) / Français
   Usage in HTML: data-i18n (text), data-i18n-html (HTML), data-i18n-placeholder, data-i18n-title (on <title>) */
(function () {
  const KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en', 'fr'];

  const dict = {
    en: {
      'common.details': 'Details', 'common.demo': 'Demo', 'common.back': 'Back',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
      'loader.welcome': "Welcome To<span>AsmaNord 's</span> Portfolio",
      'hero.title': 'Turning Ideas Into<span>Digital Solutions.</span>',
      'hero.desc': 'I design and develop web applications, business platforms, and digital solutions, combining clean interfaces with reliable backend systems.',
      'hero.tag1': 'Full-Stack Dev', 'hero.tag2': 'Backend Engineering', 'hero.tag3': 'Web Applications',
      'hero.work': 'View My Work', 'hero.contact': 'Get in Touch',
      'hero.typing': 'Computer Science Student|C Programmer|Web Developer|SQL & Databases',
      'about.title': 'About Me',
      'about.hello': "Hello, I'm <span>Asma</span>🍵",
      'about.desc': '<strong class="about-strong">Full-Stack Developer | Digital Solutions </strong><br /><br />I help businesses turn ideas into functional digital solutions through custom websites, web applications, and backend systems.<br /> <br /> From building an online presence to developing tailored business platforms, I focus on creating practical, user-friendly solutions that support business needs.<br /><br />With experience in software development, project leadership, and client collaboration, I bring ideas from concept to reality.',
      'about.cv': 'Download CV', 'about.downloading': 'Downloading...', 'about.view': '<> View Projects',
      'portfolio.title': 'Portfolio Showcase',
      'portfolio.desc': 'Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.',
      'portfolio.projects': 'Projects', 'portfolio.tech': 'Tech Stack',
      'p1.desc': "Havana Coffee is a café website designed to showcase the brand's Cuban-inspired atmosphere through a warm, elegant, and immersive online experience.",
      'p2.title': 'Bakhti Driving School - Business Website Development',
      'p2.desc': "Bakhti Driving School is a business website concept designed to present a driving school's services and help prospective learners explore their options.",
      'p3.title': 'Product Management project',
      'p3.desc': 'This Java app relies on CRUD principles (Create, Read, Update and Delete), using dynamic tables and exploiting the encapsulation principle in OOP.',
      'p4.title': 'REGLO | Custom Regulatory Monitoring Platform',
      'p4.desc': 'REGLO is a B2B regulatory monitoring platform designed to help Algerian businesses track relevant legal requirements and manage their compliance activities.',
      'contact.desc': "Got a question? Send me a message, and I'll get back to you soon.",
      'contact.getInTouch': 'Get in Touch',
      'contact.intro': "Have something to discuss? Send me a message and let's talk",
      'contact.send': 'Send Message', 'contact.connect': "Let's Connect",
      'ph.name': 'Your name', 'ph.email': 'Your email', 'ph.message': 'Your message',
      'ph.cname': 'Enter your name', 'ph.cmessage': 'Write your message here',
      'comments.title': 'Comments', 'comments.name': 'Name', 'comments.message': 'Message',
      'comments.photo': 'Profile Photo', 'comments.optional': '(optional)',
      'comments.choose': 'Choose Profile Photo', 'comments.max': 'Max file size: 5MB', 'comments.post': 'Post Comment',
      'footer.tagline': 'Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.',
      'footer.links': 'Quick Links', 'footer.connect': 'Connect With Me',
      'footer.rights': '© 2026 AsmaNord. All rights reserved.',
      'project.pageTitle': 'Project Details - Asma ELMOKRETAR', 'project.notFound': 'Project Not Found',
      'project.goTo': 'Go to screenshot', 'project.prev': 'Previous screenshot', 'project.next': 'Next screenshot'
    },
    fr: {
      'common.details': 'Détails', 'common.demo': 'Démo', 'common.back': 'Retour',
      'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact',
      'loader.welcome': "Bienvenue sur<span>le Portfolio d'AsmaNord</span>",
      'hero.title': 'Transformer vos idées en<span>solutions numériques.</span>',
      'hero.desc': "Je conçois et développe des applications web, des plateformes métier et des solutions numériques, en alliant interfaces soignées et systèmes backend fiables.",
      'hero.tag1': 'Développeuse Full-Stack', 'hero.tag2': 'Ingénierie Backend', 'hero.tag3': 'Applications Web',
      'hero.work': 'Voir mes projets', 'hero.contact': 'Me contacter',
      'hero.typing': 'Étudiante en informatique|Programmeuse C|Développeuse web|SQL & bases de données',
      'about.title': 'À propos de moi',
      'about.hello': 'Bonjour, je suis <span>Asma</span>🍵',
      'about.desc': "<strong class=\"about-strong\">Développeuse Full-Stack | Solutions numériques </strong><br /><br />J'aide les entreprises à transformer leurs idées en solutions numériques fonctionnelles, grâce à des sites web sur mesure, des applications web et des systèmes backend.<br /> <br /> De la création d'une présence en ligne au développement de plateformes métier sur mesure, je m'attache à concevoir des solutions pratiques et simples d'utilisation qui répondent aux besoins des entreprises.<br /><br />Forte d'une expérience en développement logiciel, en gestion de projet et en collaboration avec les clients, je fais passer les idées du concept à la réalité.",
      'about.cv': 'Télécharger le CV', 'about.downloading': 'Téléchargement...', 'about.view': '<> Voir les projets',
      'portfolio.title': 'Vitrine du portfolio',
      'portfolio.desc': "Découvrez mon parcours à travers mes projets, mes certifications et mes compétences techniques. Chaque section représente une étape de mon apprentissage continu.",
      'portfolio.projects': 'Projets', 'portfolio.tech': 'Stack technique',
      'p1.desc': "Havana Coffee est un site de café conçu pour mettre en valeur l'atmosphère d'inspiration cubaine de la marque, à travers une expérience en ligne chaleureuse, élégante et immersive.",
      'p2.title': 'Auto-école Bakhti - Développement de site vitrine',
      'p2.desc': "Bakhti Driving School est un concept de site professionnel conçu pour présenter les services d'une auto-école et aider les futurs candidats à explorer leurs options.",
      'p3.title': 'Projet de gestion de produits',
      'p3.desc': "Cette application Java repose sur les principes du CRUD (Créer, Lire, Mettre à jour et Supprimer), avec des tableaux dynamiques et le principe d'encapsulation de la POO.",
      'p4.title': 'REGLO | Plateforme sur mesure de veille réglementaire',
      'p4.desc': "REGLO est une plateforme B2B de veille réglementaire conçue pour aider les entreprises algériennes à suivre les exigences légales qui les concernent et à gérer leurs activités de conformité.",
      'contact.desc': 'Une question ? Envoyez-moi un message, je vous répondrai rapidement.',
      'contact.getInTouch': 'Contactez-moi',
      'contact.intro': 'Un projet ou une idée à discuter ? Envoyez-moi un message et échangeons',
      'contact.send': 'Envoyer le message', 'contact.connect': 'Restons en contact',
      'ph.name': 'Votre nom', 'ph.email': 'Votre e-mail', 'ph.message': 'Votre message',
      'ph.cname': 'Entrez votre nom', 'ph.cmessage': 'Écrivez votre message ici',
      'comments.title': 'Commentaires', 'comments.name': 'Nom', 'comments.message': 'Message',
      'comments.photo': 'Photo de profil', 'comments.optional': '(facultatif)',
      'comments.choose': 'Choisir une photo de profil', 'comments.max': 'Taille max. du fichier : 5 Mo', 'comments.post': 'Publier le commentaire',
      'footer.tagline': 'Création de sites web innovants, fonctionnels et conviviaux pour des solutions numériques.',
      'footer.links': 'Liens rapides', 'footer.connect': 'Retrouvez-moi',
      'footer.rights': '© 2026 AsmaNord. Tous droits réservés.',
      'project.pageTitle': 'Détails du projet - Asma ELMOKRETAR', 'project.notFound': 'Projet introuvable',
      'project.goTo': 'Aller à la capture', 'project.prev': 'Capture précédente', 'project.next': 'Capture suivante'
    }
  };

  function saved() {
    try { const v = localStorage.getItem(KEY); return SUPPORTED.includes(v) ? v : null; } catch (e) { return null; }
  }

  const I18N = {
    lang: saved() || DEFAULT_LANG,
    t: function (key) {
      const d = dict[I18N.lang] || dict[DEFAULT_LANG];
      return d[key] !== undefined ? d[key] : (dict[DEFAULT_LANG][key] !== undefined ? dict[DEFAULT_LANG][key] : key);
    },
    typing: function () { return I18N.t('hero.typing').split('|'); },
    set: function (lang) {
      if (!SUPPORTED.includes(lang)) return;
      I18N.lang = lang;
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      apply();
    }
  };

  function apply() {
    const t = I18N.t;
    document.documentElement.lang = I18N.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) document.title = t(titleEl.dataset.i18nTitle);
    document.querySelectorAll('.lang-switch button').forEach(b => {
      const on = b.dataset.lang === I18N.lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('app:languagechange', { detail: { lang: I18N.lang } }));
  }

  document.addEventListener('click', function (e) {
    const b = e.target.closest('.lang-switch button');
    if (b) I18N.set(b.dataset.lang);
  });

  window.I18N = I18N;
  document.documentElement.lang = I18N.lang;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
// Script para modo oscuro y cambio de idioma (ES/EN)
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const langBtn = document.getElementById('langToggle');
  const darkBtn = document.getElementById('darkModeBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');

  const translations = {
    es: {
      nav_inicio: 'Inicio',
      nav_como: 'Cómo funciona',
      nav_producto: 'Producto',
      nav_mision: 'Misión y Visión',
      nav_opiniones: 'Opiniones',
      nav_contacto: 'Contacto',
      hero_title: 'Transforma la gestión educativa con <span class="text-primary">LearnHive</span>',
      hero_description: 'La plataforma integral que conecta estudiantes y docentes para una experiencia educativa más organizada, eficiente y colaborativa.',
      hero_cta: 'Empieza ahora →',
      how_title: '¿Cómo funciona LearnHive?',
      how_subtitle: 'Tres simples pasos para revolucionar tu experiencia educativa',
      step1_badge: 'Paso 1',
      step1_title: 'Registro',
      step1_desc: 'Crea tu cuenta como estudiante o docente y accede a todas las funcionalidades de la plataforma.',
      step2_badge: 'Paso 2',
      step2_title: 'Organización Académica',
      step2_desc: 'Gestiona grupos, asigna trabajos, programa entregas y mantén todo organizado en un solo lugar.',
      step3_badge: 'Paso 3',
      step3_title: 'Seguimiento del Progreso',
      step3_desc: 'Monitorea el avance, recibe retroalimentación automatizada y mejora continuamente.',
      about_title: 'About the Product',
      about_sub: 'Descubre las características principales de LearnHive',
      prod_feat1_title: 'Gestión Académica Integral',
      prod_feat1_desc: 'Organiza cursos, asignaturas, tareas y entregas en una plataforma unificada que simplifica la administración educativa.',
      prod_feat2_title: 'Colaboración en Tiempo Real',
      prod_feat2_desc: 'Facilita la comunicación entre estudiantes y docentes con herramientas de colaboración instantánea y feedback continuo.',
      prod_feat3_title: 'Análisis y Reportes',
      prod_feat3_desc: 'Obtén insights detallados sobre el rendimiento académico con dashboards interactivos y reportes personalizados.',
      prod_feat4_title: 'Acceso Multiplataforma',
      prod_feat4_desc: 'Disponible en web, móvil y tablet para que puedas acceder desde cualquier dispositivo, en cualquier momento.',
      prod_feat5_title: 'Automatización Inteligente',
      prod_feat5_desc: 'Automatiza tareas repetitivas como calificaciones, recordatorios y notificaciones para mayor eficiencia.',
      team_title: 'About the team: APX-4',
      vision_title: 'Nuestra Visión y Misión',
      vision_sub: 'Construyendo el futuro de la educación digital',
      vision_desc: 'Convertirnos en el referente de gestión educativa en Lima Metropolitana...',
      mission_desc: 'Empoderar a docentes y estudiantes con una plataforma intuitiva...',
      testi_title: 'Lo que dicen nuestros usuarios',
      testi_sub: 'Testimonios reales...',
      testi_1_text: 'LearnHive me ayuda a organizar mis clases y me ahorra tiempo en correcciones.',
      testi_1_role: 'Docente',
      testi_2_text: 'Ahora entrego mis tareas a tiempo y veo mi progreso con claridad.',
      testi_2_role: 'Estudiante',
      testi_3_text: 'La comunicación con mis estudiantes mejoró bastante desde que usamos la plataforma.',
      testi_3_role: 'Profesora',
      cta_title: '¿Listo para transformar tu experiencia educativa?',
      cta_sub: 'Únete a cientos de estudiantes y docentes...',
      cta_btn: 'Comenzar gratis →',
      footer_desc: 'Transformando la educación...',
      footer_complaints: 'Libro de Reclamaciones',
      footer_saas: 'Acuerdo SaaS',
      footer_links_title: 'Enlaces rápidos',
      footer_link_inicio: 'Inicio',
      footer_link_como: 'Cómo funciona',
      footer_link_mision: 'Misión y Visión',
      footer_link_testimonios: 'Testimonios',
      footer_support_title: 'Soporte',
      footer_privacy: 'Política de privacidad',
      footer_terms: 'Términos de servicio',
      footer_contact: 'Contacto',
      footer_help: 'Ayuda',
      footer_copyright: '© 2024 LearnHive - APX-4. Todos los derechos reservados.'
    },
    en: {
      nav_inicio: 'Home',
      nav_como: 'How it works',
      nav_producto: 'Product',
      nav_mision: 'Mission & Vision',
      nav_opiniones: 'Reviews',
      nav_contacto: 'Contact',
      hero_title: 'Transform educational management with <span class="text-primary">LearnHive</span>',
      hero_description: 'The all-in-one platform connecting students and teachers for a more organized, efficient and collaborative learning experience.',
      hero_cta: 'Get started →',
      how_title: 'How LearnHive Works',
      how_subtitle: 'Three simple steps to revolutionize your learning experience',
      step1_badge: 'Step 1',
      step1_title: 'Sign Up',
      step1_desc: 'Create your account as a student or teacher and access all platform features.',
      step2_badge: 'Step 2',
      step2_title: 'Academic Organization',
      step2_desc: 'Manage groups, assign work, schedule deliveries and keep everything organized in one place.',
      step3_badge: 'Step 3',
      step3_title: 'Progress Tracking',
      step3_desc: 'Monitor progress, receive automated feedback and continuously improve.',
      about_title: 'About the Product',
      about_sub: 'Discover LearnHive main features',
      prod_feat1_title: 'Comprehensive Academic Management',
      prod_feat1_desc: 'Organize courses, subjects, assignments and submissions in a unified platform that simplifies educational administration.',
      prod_feat2_title: 'Real-time Collaboration',
      prod_feat2_desc: 'Enable instant communication between students and teachers with collaboration tools and continuous feedback.',
      prod_feat3_title: 'Analytics & Reports',
      prod_feat3_desc: 'Get detailed insights on academic performance with interactive dashboards and custom reports.',
      prod_feat4_title: 'Cross-platform Access',
      prod_feat4_desc: 'Available on web, mobile and tablet so you can access from any device, anytime.',
      prod_feat5_title: 'Intelligent Automation',
      prod_feat5_desc: 'Automate repetitive tasks like grading, reminders and notifications for greater efficiency.',
      team_title: 'About the team: APX-4',
      vision_title: 'Our Vision & Mission',
      vision_sub: 'Building the future of digital education',
      vision_desc: 'Become the reference in educational management in Lima Metropolitana...',
      mission_desc: 'Empower teachers and students with an intuitive platform...',
      testi_title: 'What our users say',
      testi_sub: 'Real testimonials...',
      testi_1_text: 'LearnHive helps me organize my classes and saves time on grading.',
      testi_1_role: 'Teacher',
      testi_2_text: 'I submit assignments on time now and can clearly track my progress.',
      testi_2_role: 'Student',
      testi_3_text: 'Communication with my students has improved significantly since we started using the platform.',
      testi_3_role: 'Teacher',
      cta_title: 'Ready to transform your learning experience?',
      cta_sub: 'Join hundreds of students and teachers...',
      cta_btn: 'Start for free →',
      footer_desc: 'Transforming education...',
      footer_complaints: 'Complaints Book',
      footer_saas: 'SaaS Agreement',
      footer_links_title: 'Quick Links',
      footer_link_inicio: 'Home',
      footer_link_como: 'How it works',
      footer_link_mision: 'Mission & Vision',
      footer_link_testimonios: 'Testimonials',
      footer_support_title: 'Support',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_contact: 'Contact',
      footer_help: 'Help',
      footer_copyright: '© 2024 LearnHive - APX-4. All rights reserved.'
    }
  };

  // Minimal monochrome icons (use currentColor so they render black/white)
  const sunIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M4.93 4.93l1.41 1.41"></path>
      <path d="M17.66 17.66l1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M4.93 19.07l1.41-1.41"></path>
      <path d="M17.66 6.34l1.41-1.41"></path>
    </svg>
  `;

  const moonIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  `;

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const value = (translations[lang] && translations[lang][key]) || '';
      // Use innerHTML to allow markup in some strings (e.g. hero_title)
      el.innerHTML = value;
    });
    // update language button text
    if (langBtn) langBtn.textContent = (lang === 'es') ? 'ES' : 'EN';
    // set html lang attribute
    document.documentElement.lang = (lang === 'es') ? 'es' : 'en';
  }


  const savedLang = localStorage.getItem('site-lang') || 'es';
  const savedTheme = localStorage.getItem('site-theme') || 'light';


  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (darkBtn) darkBtn.innerHTML = sunIcon;
  } else {
    body.classList.remove('dark-mode');
    if (darkBtn) darkBtn.innerHTML = moonIcon;
  }


  applyTranslations(savedLang);


  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem('site-lang') || savedLang || 'es';
      const next = current === 'es' ? 'en' : 'es';
      localStorage.setItem('site-lang', next);
      applyTranslations(next);
    });
  }

  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
      if (darkBtn) darkBtn.innerHTML = isDark ? sunIcon : moonIcon;
    });
  }

 
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    
      const close = document.getElementById('closeIcon');
      if (close) close.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
      if (hamburger) hamburger.style.display = mobileMenu.classList.contains('active') ? 'none' : 'flex';
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const hamburger = document.getElementById("hamburger")
  const closeIcon = document.getElementById("closeIcon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  const mobileRegisterBtn = document.querySelector(".mobile-register")

  let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.add("active")
      hamburger.style.display = "none"
      closeIcon.style.display = "block"
    } else {
      mobileMenu.classList.remove("active")
      hamburger.style.display = "flex"
      closeIcon.style.display = "none"
    }
  }

  function closeMenu() {
    isMenuOpen = false
    mobileMenu.classList.remove("active")
    hamburger.style.display = "flex"
    closeIcon.style.display = "none"
  }


  mobileMenuBtn.addEventListener("click", toggleMenu)


  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  if (mobileRegisterBtn) {
    mobileRegisterBtn.addEventListener("click", closeMenu)
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })


  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      
      header.style.transform = "translateY(-100%)"
    } else {
      
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })


  header.style.transition = "transform 0.3s ease-in-out"
})


window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".step-card, .testimonial-card, .vision-card, .mission-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

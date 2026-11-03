/* =========================================================
   PATHFINDER AI AGENCY — main.js
   Menú responsive, tema claro/oscuro, idioma ES/EN y animaciones.
   Sin dependencias externas.
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. Diccionario de contenidos
     --------------------------------------------------------- */
  var translations = {
    es: {
      docTitle: 'Pathfinder AI Agency | Automatización que sí funciona',
      docDescription: 'Pathfinder AI Agency diseña automatizaciones, asistentes de voz e integraciones que simplifican operaciones, aceleran respuestas y recuperan ingresos para empresas de servicios.',
      skip: 'Saltar al contenido',

      navSolutions: 'Qué hacemos', navModels: 'Cómo trabajamos', navWork: 'Resultados en acción',
      navProcess: 'Cómo lo hacemos', navAbout: 'Quiénes somos', navCall: 'Agenda una llamada',

      heroEyebrow: 'Automatización práctica para negocios reales',
      heroTitle: 'Menos tareas repetitivas.<br><em>Más tiempo para crecer.</em>',
      heroLead: 'Diseñamos sistemas que conectan tus herramientas, atienden a tus clientes y mantienen el trabajo en movimiento, sin complicar tu operación.',
      heroCall: 'Consulta gratuita de 15 min',
      heroDemo: 'Ver muestra interactiva',
      heroPhotoAlt: 'Una profesional de servicios atiende a una clienta mientras su negocio sigue funcionando de fondo.',
      heroPhotoBadge: 'Llamada entrante',
      heroPhotoBadgeSub: 'Respondida automáticamente',
      proofOne: 'Flujos automatizados', proofTwo: 'Asistentes de voz', proofThree: 'Integraciones',

      metricAvailability: 'Disponibilidad', metricResponse: 'Tiempo de respuesta', metricTools: 'Herramientas conectadas',
      channelPhone: 'Teléfono', channelMail: 'Correo', channelWeb: 'Web', channelChat: 'Chat',
      outBooking: 'Cita agendada', outFollowup: 'Seguimiento enviado', outRecord: 'Registro actualizado',
      outBookingShort: 'Cita agendada', outFollowupShort: 'Seguimiento', outRecordShort: 'Registro',
      stageAlt: 'Las solicitudes que llegan por teléfono, correo, web y chat se unifican en un solo sistema que las resuelve y devuelve citas agendadas, seguimientos enviados y registros actualizados.',

      stripOneTitle: 'Responde más rápido', stripOneText: 'Reduce tiempos de espera y oportunidades perdidas.',
      stripTwoTitle: 'Trabaja con orden', stripTwoText: 'Conecta datos, calendarios y comunicaciones.',
      stripThreeTitle: 'Escala sin fricción', stripThreeText: 'Automatiza lo repetitivo y conserva el control.',

      solutionsEyebrow: 'Qué hacemos',
      solutionsTitle: 'Tecnología útil, integrada a tu forma de trabajar.',
      solutionsLead: 'Partimos del proceso, no de la moda. Identificamos el cuello de botella y construimos una solución clara, medible y sostenible.',
      serviceOneTitle: 'Automatización de procesos',
      serviceOneText: 'Flujos con n8n para conectar formularios, correo, CRM, calendarios, hojas de cálculo y sistemas internos.',
      serviceOneA: 'Menos digitación manual', serviceOneB: 'Notificaciones y seguimiento', serviceOneC: 'Registro y trazabilidad',
      serviceTwoTitle: 'Recepción y atención por voz',
      serviceTwoText: 'Agentes que contestan llamadas, resuelven preguntas frecuentes y coordinan citas con una experiencia natural.',
      serviceTwoA: 'Atención extendida', serviceTwoB: 'Agenda en tiempo real', serviceTwoC: 'Escalamiento a personas',
      serviceThreeTitle: 'Eficiencia administrativa',
      serviceThreeText: 'Sistemas para organizar solicitudes, generar documentos, clasificar información y mejorar la visibilidad operativa.',
      serviceThreeA: 'Información centralizada', serviceThreeB: 'Menos reprocesos', serviceThreeC: 'Decisiones con contexto',

      modelsEyebrow: 'Cómo trabajamos contigo',
      modelsTitle: 'Dos modelos de colaboración.',
      modelsLead: 'Dos caminos para ampliar tu capacidad operativa y recuperar los prospectos que hoy se pierden.',
      modelOneTag: 'Implementación', modelOneTitle: 'Sistemas Done-For-You',
      modelOneText: 'Automatizaciones de IA de principio a fin para consultas de clientes, seguimientos y reservas. Operan de forma autónoma para tu equipo.',
      modelOneA: 'Diseño, construcción y despliegue completos',
      modelOneB: 'Integración con tus sistemas actuales',
      modelOneC: 'Documentación y monitoreo de entrega',
      modelTwoTag: 'Advisory', modelTwoTitle: 'Mentoría para profesionales',
      modelTwoText: 'Mentoría directa y nuestras plantillas exclusivas para que adaptes flujos de IA a tu nicho de servicio específico.',
      modelTwoA: 'Sesiones de trabajo uno a uno',
      modelTwoB: 'Plantillas de flujos listas para usar',
      modelTwoC: 'Criterios para priorizar por retorno',

      costEyebrow: 'El costo del trabajo manual',
      costTitle: 'Tú te enfocas en el servicio. Nosotros eliminamos los cuellos de botella que te cuestan clientes.',
      costOneTitle: 'Consultas perdidas',
      costOneText: 'Los clientes esperan respuestas inmediatas. No pierdas prospectos frente a la competencia mientras estás ocupado entregando tu servicio.',
      costTwoTitle: 'Fricción al agendar',
      costTwoText: 'Termina con los correos interminables de ida y vuelta. Automatiza tu calendario y devuélvele horas útiles a tu equipo.',
      costThreeTitle: 'Seguimientos olvidados',
      costThreeText: 'Nunca olvides un seguimiento. El rastreo automatizado asegura que ninguna oportunidad quede enterrada en la bandeja de entrada.',

      workEyebrow: 'Resultados en acción',
      workTitle: 'No solo lo contamos. Puedes probarlo.',
      workLead: 'Explora una demostración interactiva de recepción por voz y reserva de citas, disponible en español e inglés.',
      demoBadge: 'Muestra interactiva',
      demoTitle: 'Mary, recepcionista de voz para consultorios',
      demoText: 'Una experiencia diseñada para atender llamadas, consultar disponibilidad y apoyar la programación de citas mientras el profesional se concentra en sus clientes.',
      demoFeatureOne: 'Atención de llamadas', demoFeatureTwo: 'Consulta de agenda', demoFeatureThree: 'Confirmación automática',
      demoSpanish: 'Abrir demo en español', demoEnglish: 'Abrir demo en inglés',
      phoneIncoming: 'Llamada entrante', phoneState: 'Atendiendo y consultando agenda',
      calendarTitle: 'Agenda', calendarToday: 'Hoy',
      calendarBusy: 'Ocupado', calendarOpen: 'Disponible', calendarBooked: 'Nueva cita',
      presentationLabel: 'Presentación de referencia',
      presentationTitle: 'AI in Action: prompts, automatización, flujos y eficiencia administrativa',

      processEyebrow: 'Cómo lo hacemos',
      processTitle: 'De un problema operativo a una solución que el equipo sí usa.',
      processLead: 'Construimos por etapas, validamos con casos reales y dejamos documentación para que la operación mantenga el control.',
      stepOneTitle: 'Auditoría y diagnóstico',
      stepOneText: 'Mapeamos el proceso actual e identificamos exactamente dónde se pierden ingresos por respuestas lentas o tareas repetidas.',
      stepTwoTitle: 'Diseño de la solución',
      stepTwoText: 'Definimos la arquitectura, las integraciones y los puntos donde una persona debe mantener el control.',
      stepThreeTitle: 'Implementación ágil',
      stepThreeText: 'Desplegamos automatizaciones de alto retorno y probamos escenarios reales sin interrumpir tu operación diaria.',
      stepFourTitle: 'Entrega y acompañamiento',
      stepFourText: 'Documentamos, capacitamos y mantenemos el sistema optimizado para que ningún prospecto quede sin respuesta.',

      caseEyebrow: 'Un enfoque responsable',
      caseTitle: 'Automatizar sin perder criterio, privacidad ni control.',
      caseText: 'Para cada proyecto definimos qué puede automatizarse, qué información debe permanecer en el sistema principal y cuándo una persona debe intervenir.',
      caseOneTitle: 'Privacidad desde el diseño', caseOneText: 'Uso mínimo de datos y reglas claras de almacenamiento.',
      caseTwoTitle: 'Sistemas conectados', caseTwoText: 'Calendario, comunicaciones y operación trabajando en conjunto.',
      caseThreeTitle: 'Resultados verificables', caseThreeText: 'Pruebas de extremo a extremo y criterios de aceptación.',
      panelLabel: 'Arquitectura de ejemplo',
      archOneTitle: 'Canales', archOneText: 'Teléfono · correo · web',
      archTwoTitle: 'Orquestación', archTwoText: 'n8n · reglas · validaciones',
      archThreeTitle: 'Sistemas principales', archThreeText: 'Agenda · CRM · correo · reportes',
      panelFoot: 'Con intervención humana donde importa',

      teamEyebrow: 'Quiénes somos',
      teamTitle: '[PLACEHOLDER] Tres personas, un mismo objetivo.',
      teamLead: '[PLACEHOLDER — pendiente de bios reales] Así se reparte el trabajo entre quienes construyen Pathfinder AI Agency.',
      team1Name: '[Nombre 1]', team1Role: '[Rol / título]', team1Super: '[Superpoder]', team1Bio: '[Bio corta pendiente — 1–2 líneas sobre su enfoque y experiencia.]',
      team2Name: '[Nombre 2]', team2Role: '[Rol / título]', team2Super: '[Superpoder]', team2Bio: '[Bio corta pendiente — 1–2 líneas sobre su enfoque y experiencia.]',
      team3Name: '[Nombre 3]', team3Role: '[Rol / título]', team3Super: '[Superpoder]', team3Bio: '[Bio corta pendiente — 1–2 líneas sobre su enfoque y experiencia.]',
      teamNote: 'Sección en borrador: fotos y biografías finales pendientes de confirmar con el equipo.',

      valuesEyebrow: 'Nuestras directrices',
      valuesTitle: 'Los principios con los que medimos cada proyecto.',
      valueOneTitle: 'Orientado a resultados', valueOneText: 'Nos juzga una sola métrica: recuperar y generar ingresos predecibles.',
      valueTwoTitle: 'Prioridad en el profesional', valueTwoText: 'Creado para equipos pequeños. Respetamos y nos integramos con tu forma de trabajo.',
      valueThreeTitle: 'Innovación aplicada', valueThreeText: 'Automatización que le da a tu empresa una capacidad de nivel corporativo.',
      valueFourTitle: 'Transparencia', valueFourText: 'Comunicación clara, modelos de precio predecibles y resultados medibles.',

      ctaEyebrow: 'Tu próximo proceso puede ser más simple',
      ctaTitle: 'Conversemos sobre el cuello de botella que más tiempo le quita a tu equipo.',
      ctaButton: 'Agendar consulta gratuita',

      footerText: 'Automatizaciones de IA premium para empresas de servicios. Operaciones más simples y clientes mejor atendidos.',
      footerNav: 'Navegación', footerContact: 'Contacto', footerBook: 'Agenda una llamada',
      footerRights: 'Todos los derechos reservados.',
      footerNote: 'Automatización responsable, con intervención humana donde importa.',

      menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
      themeToDark: 'Cambiar a tema oscuro', themeToLight: 'Cambiar a tema claro'
    },

    en: {
      docTitle: 'Pathfinder AI Agency | Automation that actually works',
      docDescription: 'Pathfinder AI Agency designs automations, voice assistants and integrations that simplify operations, speed up responses and recover revenue for service businesses.',
      skip: 'Skip to content',

      navSolutions: 'What we do', navModels: 'How we work', navWork: 'Results in action',
      navProcess: 'How we do it', navAbout: 'Who we are', navCall: 'Book a call',

      heroEyebrow: 'Practical automation for real businesses',
      heroTitle: 'Fewer repetitive tasks.<br><em>More time to grow.</em>',
      heroLead: 'We design systems that connect your tools, assist your clients and keep work moving, without making your operation more complicated.',
      heroCall: 'Free 15-min consultation',
      heroDemo: 'See an interactive sample',
      heroPhotoAlt: 'A service professional attends to a client while the rest of the business keeps running in the background.',
      heroPhotoBadge: 'Incoming call',
      heroPhotoBadgeSub: 'Answered automatically',
      proofOne: 'Automated workflows', proofTwo: 'Voice assistants', proofThree: 'Integrations',

      metricAvailability: 'Availability', metricResponse: 'Response time', metricTools: 'Connected tools',
      channelPhone: 'Phone', channelMail: 'Email', channelWeb: 'Web', channelChat: 'Chat',
      outBooking: 'Booking confirmed', outFollowup: 'Follow-up sent', outRecord: 'Record updated',
      outBookingShort: 'Booking set', outFollowupShort: 'Follow-up', outRecordShort: 'Record',
      stageAlt: 'Requests arriving by phone, email, web and chat are unified into a single system that resolves them and returns confirmed bookings, sent follow-ups and updated records.',

      stripOneTitle: 'Respond faster', stripOneText: 'Reduce wait times and missed opportunities.',
      stripTwoTitle: 'Work with clarity', stripTwoText: 'Connect data, calendars and communication.',
      stripThreeTitle: 'Scale smoothly', stripThreeText: 'Automate repetitive work while staying in control.',

      solutionsEyebrow: 'What we do',
      solutionsTitle: 'Useful technology, integrated with the way you work.',
      solutionsLead: 'We start with the process, not the hype. We identify the bottleneck and build a clear, measurable and sustainable solution.',
      serviceOneTitle: 'Process automation',
      serviceOneText: 'n8n workflows connecting forms, email, CRM, calendars, spreadsheets and internal systems.',
      serviceOneA: 'Less manual data entry', serviceOneB: 'Notifications and follow-up', serviceOneC: 'Logging and traceability',
      serviceTwoTitle: 'Voice reception and support',
      serviceTwoText: 'Agents that answer calls, handle common questions and coordinate appointments through a natural experience.',
      serviceTwoA: 'Extended availability', serviceTwoB: 'Real-time scheduling', serviceTwoC: 'Human escalation',
      serviceThreeTitle: 'Administrative efficiency',
      serviceThreeText: 'Systems that organize requests, generate documents, classify information and improve operational visibility.',
      serviceThreeA: 'Centralized information', serviceThreeB: 'Less rework', serviceThreeC: 'Context-rich decisions',

      modelsEyebrow: 'How we work with you',
      modelsTitle: 'Two engagement models.',
      modelsLead: 'Two paths to expand your operational capacity and recover the prospects you are losing today.',
      modelOneTag: 'Implementation', modelOneTitle: 'Done-For-You systems',
      modelOneText: 'End-to-end AI automations for client inquiries, follow-ups and bookings. Fully autonomous for your team.',
      modelOneA: 'Complete design, build and deployment',
      modelOneB: 'Integration with your current systems',
      modelOneC: 'Documentation and handoff monitoring',
      modelTwoTag: 'Advisory', modelTwoTitle: 'Mentorship for practitioners',
      modelTwoText: 'Direct mentorship and our exclusive templates so you can adapt AI workflows to your specific service niche.',
      modelTwoA: 'One-to-one working sessions',
      modelTwoB: 'Ready-to-use workflow templates',
      modelTwoC: 'Criteria to prioritize by return',

      costEyebrow: 'The cost of manual work',
      costTitle: 'You focus on delivering the service. We remove the bottlenecks that cost you clients.',
      costOneTitle: 'Missed inquiries',
      costOneText: 'Clients expect immediate responses. Do not lose prospects to the competition while you are busy delivering your service.',
      costTwoTitle: 'Booking friction',
      costTwoText: 'End the endless back-and-forth emails. Automate your calendar and give your team its useful hours back.',
      costThreeTitle: 'Forgotten follow-ups',
      costThreeText: 'Never forget a follow-up. Automated tracking makes sure no opportunity gets buried in the inbox.',

      workEyebrow: 'Results in action',
      workTitle: 'Do not just take our word for it. Try it.',
      workLead: 'Explore an interactive voice reception and appointment-booking demo, available in Spanish and English.',
      demoBadge: 'Interactive sample',
      demoTitle: 'Mary, a voice receptionist for practices',
      demoText: 'An experience built to answer calls, check availability and support appointment scheduling while the practitioner focuses on clients.',
      demoFeatureOne: 'Call handling', demoFeatureTwo: 'Calendar availability', demoFeatureThree: 'Automated confirmation',
      demoSpanish: 'Open Spanish demo', demoEnglish: 'Open English demo',
      phoneIncoming: 'Incoming call', phoneState: 'Answering and checking availability',
      calendarTitle: 'Schedule', calendarToday: 'Today',
      calendarBusy: 'Busy', calendarOpen: 'Available', calendarBooked: 'New booking',
      presentationLabel: 'Reference presentation',
      presentationTitle: 'AI in Action: prompts, automation, workflows and administrative efficiency',

      processEyebrow: 'How we do it',
      processTitle: 'From an operational problem to a solution the team actually uses.',
      processLead: 'We build in stages, validate with real scenarios and provide documentation so operations stay in control.',
      stepOneTitle: 'Audit and diagnosis',
      stepOneText: 'We map the current process and identify exactly where revenue is lost to slow responses or repeated tasks.',
      stepTwoTitle: 'Solution design',
      stepTwoText: 'We define the architecture, the integrations and the points where a person must stay in control.',
      stepThreeTitle: 'Agile implementation',
      stepThreeText: 'We deploy high-return automations and test real scenarios without disrupting your daily operation.',
      stepFourTitle: 'Handoff and support',
      stepFourText: 'We document, train and keep the system optimized so no prospect goes unanswered.',

      caseEyebrow: 'A responsible approach',
      caseTitle: 'Automate without losing judgment, privacy or control.',
      caseText: 'For each project we define what can be automated, what information must stay in the system of record and when a person should step in.',
      caseOneTitle: 'Privacy by design', caseOneText: 'Minimum necessary data and clear storage rules.',
      caseTwoTitle: 'Connected systems', caseTwoText: 'Calendar, communications and operations working together.',
      caseThreeTitle: 'Verifiable outcomes', caseThreeText: 'End-to-end testing and clear acceptance criteria.',
      panelLabel: 'Sample architecture',
      archOneTitle: 'Channels', archOneText: 'Phone · email · web',
      archTwoTitle: 'Orchestration', archTwoText: 'n8n · rules · validations',
      archThreeTitle: 'Systems of record', archThreeText: 'Calendar · CRM · email · reporting',
      panelFoot: 'With human involvement where it matters',

      teamEyebrow: 'Who we are',
      teamTitle: '[PLACEHOLDER] Three people, one goal.',
      teamLead: '[PLACEHOLDER — real bios pending] How the work is split across the people building Pathfinder AI Agency.',
      team1Name: '[Name 1]', team1Role: '[Role / title]', team1Super: '[Superpower]', team1Bio: '[Short bio pending — 1–2 lines on focus and experience.]',
      team2Name: '[Name 2]', team2Role: '[Role / title]', team2Super: '[Superpower]', team2Bio: '[Short bio pending — 1–2 lines on focus and experience.]',
      team3Name: '[Name 3]', team3Role: '[Role / title]', team3Super: '[Superpower]', team3Bio: '[Short bio pending — 1–2 lines on focus and experience.]',
      teamNote: 'Draft section: final photos and bios pending confirmation from the team.',

      valuesEyebrow: 'Our guidelines',
      valuesTitle: 'The principles we measure every project against.',
      valueOneTitle: 'Outcome-oriented', valueOneText: 'We are judged by a single metric: recovering and generating predictable revenue.',
      valueTwoTitle: 'Practitioner-first', valueTwoText: 'Built for small teams. We respect and integrate with the way you work.',
      valueThreeTitle: 'Applied innovation', valueThreeText: 'Automation that gives your business enterprise-level capability.',
      valueFourTitle: 'Transparency', valueFourText: 'Clear communication, predictable pricing models and measurable results.',

      ctaEyebrow: 'Your next process can be simpler',
      ctaTitle: 'Let us talk about the bottleneck taking the most time from your team.',
      ctaButton: 'Book a free consultation',

      footerText: 'Premium AI automations for service businesses. Simpler operations and better-served clients.',
      footerNav: 'Navigation', footerContact: 'Contact', footerBook: 'Book a call',
      footerRights: 'All rights reserved.',
      footerNote: 'Responsible automation, with human involvement where it matters.',

      menuOpen: 'Open menu', menuClose: 'Close menu',
      themeToDark: 'Switch to dark theme', themeToLight: 'Switch to light theme'
    }
  };

  /* ---------------------------------------------------------
     2. Referencias del DOM
     --------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  var nav = document.querySelector('.site-nav');
  var navToggle = document.querySelector('.nav-toggle');
  var langSwitch = document.querySelector('[data-lang-switch]');
  var themeSwitch = document.querySelector('[data-theme-switch]');
  var themeColorMeta = document.querySelector('meta[name="theme-color"]');
  var metaDescription = document.querySelector('meta[name="description"]');
  var yearNode = document.getElementById('year');

  var STORAGE_KEY = 'pathfinder-lang';
  var THEME_KEY = 'pathfinder-theme';
  var activeLang = 'es';
  var activeTheme = 'light';

  /* ---------------------------------------------------------
     3. Idioma
     --------------------------------------------------------- */
  function readStoredLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch (e) { /* almacenamiento no disponible */ }

    var browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'es';
  }

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    activeLang = lang;
    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var value = dict[nodes[i].getAttribute('data-i18n')];
      if (typeof value === 'string') nodes[i].innerHTML = value;
    }

    var altNodes = document.querySelectorAll('[data-i18n-alt]');
    for (var a = 0; a < altNodes.length; a++) {
      var altValue = dict[altNodes[a].getAttribute('data-i18n-alt')];
      if (typeof altValue === 'string') altNodes[a].setAttribute('alt', altValue);
    }

    document.title = dict.docTitle;
    if (metaDescription) metaDescription.setAttribute('content', dict.docDescription);

    if (langSwitch) {
      var on = langSwitch.querySelector('.lang-on');
      var off = langSwitch.querySelector('.lang-off');
      if (on) on.textContent = lang === 'es' ? 'ES' : 'EN';
      if (off) off.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    if (navToggle) {
      var isOpen = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-label', isOpen ? dict.menuClose : dict.menuOpen);
    }

    if (themeSwitch) {
      themeSwitch.setAttribute('aria-label', activeTheme === 'dark' ? dict.themeToLight : dict.themeToDark);
    }

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* noop */ }
  }

  applyLanguage(readStoredLang());

  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      applyLanguage(activeLang === 'es' ? 'en' : 'es');
    });
  }

  /* ---------------------------------------------------------
     4. Tema claro / oscuro
     ---------------------------------------------------------
     El tema por defecto es el claro, que es el diseno aprobado.
     Si el visitante elige uno, su eleccion manda en las
     siguientes visitas. El <head> ya aplico el tema guardado
     antes de pintar; aqui solo se sincroniza el estado. */
  function applyTheme(theme, persist) {
    activeTheme = theme === 'dark' ? 'dark' : 'light';

    if (activeTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', activeTheme === 'dark' ? '#030E22' : '#051633');
    }

    if (themeSwitch) {
      themeSwitch.setAttribute('aria-pressed', String(activeTheme === 'dark'));
      var dict = translations[activeLang];
      if (dict) {
        themeSwitch.setAttribute('aria-label', activeTheme === 'dark' ? dict.themeToLight : dict.themeToDark);
      }
    }

    if (persist) {
      try { window.localStorage.setItem(THEME_KEY, activeTheme); } catch (e) { /* noop */ }
    }
  }

  function readStoredTheme() {
    try {
      var stored = window.localStorage.getItem(THEME_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) { /* almacenamiento no disponible */ }
    return 'light';
  }

  applyTheme(readStoredTheme(), false);

  if (themeSwitch) {
    themeSwitch.addEventListener('click', function () {
      applyTheme(activeTheme === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* ---------------------------------------------------------
     5. Menú responsive
     --------------------------------------------------------- */
  function setMenu(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('open', open);
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', translations[activeLang][open ? 'menuClose' : 'menuOpen']);
    document.body.classList.toggle('menu-open', open);
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
  }

  if (nav) {
    var links = nav.querySelectorAll('a');
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener('click', function () { setMenu(false); });
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setMenu(false);
  });

  /* ---------------------------------------------------------
     6. Encabezado al hacer scroll
     --------------------------------------------------------- */
  function syncHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });

  /* ---------------------------------------------------------
     7. Animaciones de entrada
     --------------------------------------------------------- */
  var revealNodes = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    for (var k = 0; k < revealNodes.length; k++) revealNodes[k].classList.add('visible');
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    for (var m = 0; m < revealNodes.length; m++) observer.observe(revealNodes[m]);
  }

  /* ---------------------------------------------------------
     8. Año en el pie
     --------------------------------------------------------- */
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
})();

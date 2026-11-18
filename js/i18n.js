/* Cecilia Cortina — bilingual toggle (EN default / ES) */
(function () {
  const ES = {
    // nav
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.portfolio": "Portafolio",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    // hero
    "hero.h1": "Fotografía de bodas.",
    "hero.btn": "Consulta tu fecha",
    "hero.tagline": "Fotografía documental para parejas que se preocupan menos por posar y más por cómo se sintió el día.",
    // intro
    "intro.eyebrow": "Hola, soy Cecilia",
    "intro.h2": "Creo en la conexión genuina y en la belleza de las cosas tal como son.",
    "intro.p1": "Mi trabajo es simple en esencia: estar presente, poner atención y cuidar tu historia mientras sucede.",
    "intro.p2": "Guío cuando ayuda y me hago a un lado cuando importa — para que tus fotografías se sientan honestas y verdaderamente tuyas.",
    // marquee
    "mq.1": "Atemporal", "mq.2": "Íntimo", "mq.3": "Natural", "mq.4": "Humano", "mq.5": "Cálido",
    "mq.6": "Con alma", "mq.7": "Sincero", "mq.8": "Auténtico", "mq.9": "Sin prisa",
    // featured
    "feat.eyebrow": "Trabajo seleccionado",
    "feat.h2": "Historias recientes",
    "feat.link": "Ver portafolio completo",
    // behind the camera
    "bt.eyebrow": "Detrás de la cámara",
    "bt.h2": "Quiero que te sientas cómoda desde el primer momento.",
    "bt.p1": "Desde tu primer mensaje, me tomo el tiempo de escuchar y entender lo que te importa — no solo el itinerario, sino el significado detrás de él.",
    "bt.p2": "No necesitas saber posar ni qué hacer. Solo necesitan ser ustedes mismos.",
    "bt.p3": "Yo me encargo del resto.",
    "bt.btn": "Conóceme más",
    // cta (home)
    "cta.eyebrow": "Reservando 2026 y 2027",
    "cta.h2": "Guardemos tu día, tal como se sintió.",
    "cta.p": "Cuéntame de ti, de tu gente y de dónde celebrarán. Solo tomo un número limitado de bodas al año.",
    "cta.btn": "Inicia una conversación",
    // footer
    "footer.tagline": "Fotografía de bodas · Querétaro, México",
    "footer.explore": "Explorar",
    "footer.connect": "Conecta",
    "footer.email": "Correo",
    "footer.rights": "© 2026 Cecilia Cortina. Todos los derechos reservados.",
    // about
    "about.eyebrow": "Sobre mí",
    "about.h1": "Hola, soy Cecilia.",
    "about.story_h": "Mi historia",
    "about.story_p1": "Desde pequeña supe que quería crear algo que tuviera significado.",
    "about.story_p2": "Fotografié mi primera boda casi por accidente, y todo encajó. Me enamoré del privilegio de documentar momentos reales — tranquilos, alegres, emotivos y completamente irrepetibles.",
    "about.story_p3": "Saber que estas fotografías se volverán parte de la historia de una familia es lo que me inspira cada vez que tomo mi cámara.",
    "stat.years": "Años fotografiando",
    "stat.celebrations": "Celebraciones",
    "stat.memories": "Recuerdos",
    "about.work_h": "Cómo trabajo",
    "about.work_p1": "No veo las bodas como algo que controlar, sino como algo que atestiguar. Cada pareja es distinta y cada historia tiene su propio ritmo. Me tomo el tiempo de entender el suyo, para que lo que creamos se sienta verdadero y duradero.",
    "about.work_p2": "También entiendo que ser fotografiado puede sentirse extraño. Por eso me acerco a cada boda con sensibilidad y respeto — creando un ambiente donde puedan sentirse a gusto, sin presión de actuar ni de ser algo distinto a ustedes mismos.",
    "about.work_p3": "Con los años, estas imágenes se volverán parte de tu memoria, tu familia, tu historia. No lo tomo a la ligera.",
    "about.btn": "Trabajemos juntos",
    "cta.match_h": "¿Crees que haríamos buen equipo?",
    "cta.getintouch": "Escríbeme",
    // portfolio
    "portfolio.eyebrow": "Portafolio",
    "portfolio.h1": "Historias que he contado.",
    "portfolio.cta_h": "Tu día merece el mismo cuidado.",
    "portfolio.cta_btn": "Escríbeme",
    // faq
    "faq.eyebrow": "Preguntas frecuentes",
    "faq.h1": "Bueno saber.",
    "faq.sub": "Las preguntas que más me hacen las parejas. ¿No ves la tuya? Escríbeme — respondo cada mensaje personalmente.",
    "faq.q1": "¿Con cuánta anticipación debemos reservar?",
    "faq.a1": "La mayoría de las parejas reservan de seis a doce meses antes, y las fechas populares aún antes. Dicho esto, si tu fecha está cerca, pregunta siempre — a veces tengo disponibilidad de último momento.",
    "faq.q2": "¿Viajas para bodas?",
    "faq.a2": "Claro que sí. Estoy en Querétaro y San Miguel de Allende, pero disponible en todo México y a nivel internacional. Los viajes fuera de esas zonas se suman a tu cotización a costo — sin cargos ocultos.",
    "faq.q3": "¿Cuáles son tus precios?",
    "faq.a3": "Los paquetes de boda comienzan en <strong>2,200 USD</strong> y se adaptan a tus horas de cobertura y entregables. Mándame tu fecha y detalles y te comparto la guía de precios completa.",
    "faq.q4": "¿Cuántas fotos recibimos y cuándo?",
    "faq.a4": "Recibirás una galería amplia y cuidadosamente editada — normalmente alrededor de 1,200 imágenes para un día completo de boda — entregada en un plazo de 8 semanas mediante una galería privada en línea que puedes descargar y compartir. Un adelanto llega en 72 horas.",
    "faq.q5": "¿Fotografías eventos además de bodas?",
    "faq.a5": "Sí — compromisos, aniversarios, celebraciones privadas y eventos de marca son bienvenidos. Si es importante para ti, vale la pena fotografiarlo bien.",
    "faq.q6": "¿Ofreces video también?",
    "faq.a6": "No, pero puedo recomendarte videógrafos increíbles que te van a encantar.",
    "faq.q7": "¿Qué pasa si te enfermas ese día?",
    "faq.a7": "Nunca ha pasado, pero lo tomo en serio: llevo equipo de respaldo a cada boda y tengo una red de fotógrafos de confianza que podrían cubrir para que tu día siempre esté protegido.",
    "faq.cta_h": "¿Aún tienes una pregunta?",
    "faq.cta_p": "Prefiero responderla bien a dejarte con la duda. Escríbeme cuando quieras.",
    "faq.cta_btn": "Pregúntame lo que sea",
    // contact
    "contact.eyebrow": "Contacto",
    "contact.h1": "Empecemos.",
    "contact.sub": "Cuéntame un poco sobre tu día. Yo leo y respondo cada mensaje, normalmente en menos de 48 horas.",
    "contact.hello_h": "Saluda",
    "contact.hello_p": "Entre más compartas — tu fecha, tu locación, qué te atrajo de mi trabajo — mejor podré ayudarte. ¿Prefieres WhatsApp o correo? Usa lo que te sea más fácil.",
    "contact.k_email": "Correo",
    "contact.k_based": "Ubicada en",
    "contact.v_based": "Querétaro, México · disponible en todo el mundo",
    "form.name": "Nombre completo",
    "form.email": "Correo",
    "form.date": "Fecha del evento",
    "form.type": "Tipo de evento",
    "form.opt_wedding": "Boda",
    "form.opt_engagement": "Compromiso",
    "form.opt_event": "Evento",
    "form.opt_other": "Otro",
    "form.venue": "Locación / lugar",
    "form.venue_ph": "Ciudad o nombre del lugar",
    "form.guests": "Número de invitados",
    "form.guests_ph": "Aprox.",
    "form.planner": "¿Quién es tu wedding planner?",
    "form.planner_ph": "Nombre (o «aún ninguno»)",
    "form.message": "Cuéntame sobre tu día",
    "form.message_ph": "Tu historia, tus planes, cualquier cosa que quieras contarme…",
    "form.submit": "Enviar por WhatsApp",
    "form.note": "Esto abre WhatsApp con tus datos listos para enviar — te respondo personalmente."
  };

  const els = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  const phEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-placeholder]'));
  // capture the original (English) content once
  els.forEach(function (el) { el.__en = el.innerHTML; });
  phEls.forEach(function (el) { el.__enPh = el.getAttribute('placeholder') || ''; });

  function apply(lang) {
    els.forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      el.innerHTML = (lang === 'es' && ES[k] != null) ? ES[k] : el.__en;
    });
    phEls.forEach(function (el) {
      const k = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', (lang === 'es' && ES[k] != null) ? ES[k] : el.__enPh);
    });
    document.documentElement.setAttribute('lang', lang);
    Array.prototype.slice.call(document.querySelectorAll('[data-lang-toggle]')).forEach(function (b) {
      b.textContent = (lang === 'es') ? 'EN' : 'ES';
    });
  }

  let lang = localStorage.getItem('cc_lang');
  if (lang !== 'es' && lang !== 'en') {
    lang = ((navigator.language || navigator.userLanguage || '').toLowerCase().indexOf('es') === 0) ? 'es' : 'en';
  }
  apply(lang);

  Array.prototype.slice.call(document.querySelectorAll('[data-lang-toggle]')).forEach(function (b) {
    b.addEventListener('click', function () {
      lang = (document.documentElement.getAttribute('lang') === 'es') ? 'en' : 'es';
      localStorage.setItem('cc_lang', lang);
      apply(lang);
    });
  });
})();

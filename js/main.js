/* Cecilia Cortina — interactions */
(function () {
  const header = document.querySelector('.site-header');
  const body = document.body;

  /* Hero carousel — crossfade between slides */
  const slides = document.querySelectorAll('.hero__media img');
  if (slides.length > 1) {
    let idx = 0;
    setInterval(function () {
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    }, 5000);
  }

  /* Sticky header state */
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => body.classList.toggle('nav-open'));
    document.querySelectorAll('.nav a').forEach(a =>
      a.addEventListener('click', () => body.classList.remove('nav-open'))
    );
  }

  /* Scroll reveal */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

  /* Portfolio filter */
  const filterBtns = document.querySelectorAll('.filters button');
  const items = document.querySelectorAll('.masonry figure');
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    items.forEach(it => {
      const show = cat === 'all' || it.dataset.cat === cat;
      it.classList.toggle('is-hidden', !show);
    });
  }));

  /* FAQ accordion */
  document.querySelectorAll('.faq__item').forEach(item => {
    const q = item.querySelector('.faq__q');
    const a = item.querySelector('.faq__a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.faq__a').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  /* Contact form → opens WhatsApp with a pre-filled message */
  const form = document.querySelector('.form');
  const WHATSAPP = '525535667974';
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = (id) => { const el = form.querySelector('#' + id); return el ? el.value.trim() : ''; };
    const rows = [
      ['Name', val('name')],
      ['Email', val('email')],
      ['Event date', val('date')],
      ['Type of event', val('type')],
      ['Venue / location', val('venue')],
      ['Guests', val('guests')],
      ['Wedding planner', val('planner')],
      ['Message', val('message')],
    ].filter(function (r) { return r[1]; });
    const text = "Hi Cecilia! I'd love to know more about your photography.\n\n" +
      rows.map(function (r) { return r[0] + ': ' + r[1]; }).join('\n');
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank');
    const note = form.querySelector('.form-note');
    if (note) { note.textContent = 'Opening WhatsApp with your details… if it doesn’t open, message me at +52 55 3566 7974.'; note.style.color = 'var(--wine)'; }
  });
})();

// Shared across every page: nav, footer, FAQ accordion.
document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Highlight the current page in the nav (set data-page on <body>)
  const page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav a[data-page]').forEach(a => {
      if (a.getAttribute('data-page') === page) a.classList.add('active');
    });
  }

  // Footer year
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ accordion (used on premium.html)
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (q) q.addEventListener('click', () => item.classList.toggle('open'));
  });

  // Chapter accordion (used on study.html)
  document.querySelectorAll('.chapter-head').forEach(head => {
    head.addEventListener('click', () => head.closest('.chapter').classList.toggle('open'));
  });
});

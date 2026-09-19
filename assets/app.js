// Shared across every page: nav, footer, FAQ accordion.
document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
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

  // Generic "Upgrade to Premium" modal wired on any page that has #upgradeBtn
  const upgradeBtn = document.getElementById('upgradeBtn');
  if (upgradeBtn) {
    upgradeBtn.addEventListener('click', () => {
      const root = document.getElementById('modalRoot');
      root.innerHTML = `
        <div class="modal-backdrop" id="backdrop">
          <div class="modal">
            <h3>Payments are coming soon</h3>
            <p>Online checkout for Premium isn't switched on yet. When it's ready, this button will take you straight to secure payment and unlock your plan instantly. Thanks for your patience while this is being set up.</p>
            <div class="actions">
              <button class="btn btn-outline-navy" id="closeModal">Close</button>
            </div>
          </div>
        </div>`;
      document.getElementById('closeModal').addEventListener('click', () => root.innerHTML = '');
    });
  }
});

// Premium access + PayPal checkout.
//
// HOW IT WORKS
//   1. The buyer clicks a plan on premium.html → a checkout modal opens.
//   2. PayPal's own buttons take the payment. Card details and PayPal logins
//      never touch this site.
//   3. When PayPal reports the payment COMPLETED, we save an "entitlement"
//      (which modules were bought + the order ID) in this browser's localStorage.
//   4. The quiz engine asks Premium.hasAccess('uk' | 'english' | 'ielts')
//      before applying the free-test limit.
//
// HONEST LIMIT: this is a static site with no server, so the entitlement lives
// in the buyer's browser. It works for honest customers, but anyone comfortable
// with browser dev tools could grant themselves access. See README → "Making
// payments tamper-proof" for the upgrade path.

const Premium = (() => {
  const KEY = 'ukcp_entitlement_v1';
  const MODULES = {
    uk:      'Life in the UK',
    english: 'English (B1)',
    ielts:   'IELTS'
  };

  // Own-property check: a plain MODULES[m] lookup would accept inherited keys
  // such as "constructor" or "__proto__".
  const isModule = m => Object.prototype.hasOwnProperty.call(MODULES, m);

  /* ---------------- entitlement storage ---------------- */
  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      const e = JSON.parse(raw);
      if (!e || !Array.isArray(e.modules)) return null;
      e.modules = e.modules.filter(isModule);   // ignore anything unknown
      return e;
    } catch (_) { return null; }        // storage blocked or corrupt → treat as free
  }

  function write(e) {
    try { localStorage.setItem(KEY, JSON.stringify(e)); return true; }
    catch (_) { return false; }
  }

  function hasAccess(module) {
    const e = read();
    return !!e && e.modules.includes(module);
  }

  function modulesOwned() {
    const e = read();
    return e ? e.modules : [];
  }

  // Merge rather than overwrite, so buying a second module (or the bundle
  // later) adds to what the person already owns.
  function grant(modules, orderId, plan) {
    const existing = read() || { modules: [], orders: [] };
    const merged = Array.from(new Set([...existing.modules, ...modules]));
    const orders = (existing.orders || []).concat([{ id: orderId, plan, at: new Date().toISOString(), modules }]);
    const ok = write({ modules: merged, orders });
    document.dispatchEvent(new CustomEvent('premium:changed'));
    return ok;
  }

  /* ---------------- configuration checks ---------------- */
  function isConfigured() {
    return typeof SITE_CONFIG !== 'undefined'
      && SITE_CONFIG.paypalClientId
      && SITE_CONFIG.paypalClientId !== 'YOUR_PAYPAL_CLIENT_ID';
  }

  /* ---------------- PayPal SDK loader ---------------- */
  let sdkPromise = null;
  function loadPayPal() {
    if (window.paypal) return Promise.resolve();
    if (sdkPromise) return sdkPromise;
    sdkPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://www.paypal.com/sdk/js?client-id=' + encodeURIComponent(SITE_CONFIG.paypalClientId)
            + '&currency=' + encodeURIComponent(SITE_CONFIG.currency)
            + '&intent=capture&components=buttons';
      s.onload = resolve;
      s.onerror = () => { sdkPromise = null; reject(new Error('sdk-load-failed')); };
      document.head.appendChild(s);
    });
    return sdkPromise;
  }

  /* ---------------- checkout modal ---------------- */
  function root() { return document.getElementById('modalRoot'); }
  function close() { root().innerHTML = ''; document.removeEventListener('keydown', onKey); }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function shell(inner) {
    root().innerHTML = `
      <div class="modal-backdrop" id="checkoutBackdrop">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="checkoutTitle" style="max-width:460px;">
          ${inner}
        </div>
      </div>`;
    document.addEventListener('keydown', onKey);
    document.getElementById('checkoutBackdrop').addEventListener('mousedown', e => {
      if (e.target.id === 'checkoutBackdrop') close();
    });
  }

  function showNotConfigured() {
    shell(`
      <h3 id="checkoutTitle">Payments are coming soon</h3>
      <p>Online checkout isn't switched on yet. Thanks for your patience while this is being set up.</p>
      <div class="actions"><button class="btn btn-outline-navy" id="closeCheckout">Close</button></div>`);
    document.getElementById('closeCheckout').addEventListener('click', close);
  }

  function showError(message) {
    const box = document.getElementById('checkoutMsg');
    if (box) { box.textContent = message; box.style.display = 'block'; }
  }

  function showSuccess(plan, modules, orderId) {
    const names = modules.map(m => MODULES[m]).join(', ');
    const support = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.supportEmail)
      ? ` If anything goes wrong, email <b>${SITE_CONFIG.supportEmail}</b> quoting this order ID.` : '';
    shell(`
      <h3 id="checkoutTitle">Payment received — thank you</h3>
      <p><b>Unlocked:</b> ${names}.</p>
      <p style="font-size:13.5px;">Your PayPal order ID is <b style="user-select:all;">${orderId}</b>. Please keep it.
      Access is saved in this browser on this device.${support}</p>
      <div class="actions">
        <button class="btn btn-outline-navy" id="closeCheckout">Close</button>
        <a class="btn btn-navy" href="practice.html">Start practising</a>
      </div>`);
    document.getElementById('closeCheckout').addEventListener('click', close);
  }

  function openCheckout(planId) {
    if (!isConfigured()) { showNotConfigured(); return; }
    const plan = SITE_CONFIG.plans[planId];
    if (!plan) return;

    const needsPick = planId === 'module';
    const owned = modulesOwned();
    const firstFree = Object.keys(MODULES).find(m => !owned.includes(m)) || 'uk';

    shell(`
      <h3 id="checkoutTitle">${plan.name} — £${plan.price}</h3>
      <p style="margin-bottom:12px;">One-off payment. No subscription. Paid securely through PayPal.</p>
      ${needsPick ? `
        <fieldset style="border:1px solid var(--line);padding:10px 14px;margin:0 0 16px;">
          <legend style="font-size:12.5px;color:var(--ink-soft);padding:0 6px;">Choose your module</legend>
          ${Object.keys(MODULES).map(m => `
            <label style="display:flex;gap:8px;align-items:center;font-size:14.5px;padding:5px 0;cursor:pointer;">
              <input type="radio" name="pickModule" value="${m}" ${m === firstFree ? 'checked' : ''} ${owned.includes(m) ? 'disabled' : ''}>
              ${MODULES[m]}${owned.includes(m) ? ' <i style="color:var(--good);font-size:12.5px;">(already unlocked)</i>' : ''}
            </label>`).join('')}
        </fieldset>` : `
        <p style="font-size:14px;margin-bottom:14px;"><b>Includes:</b> ${Object.values(MODULES).join(', ')}.</p>`}
      <div id="checkoutMsg" role="alert" style="display:none;background:#FBEAEC;border:1px solid var(--red);color:var(--red);font-size:13.5px;padding:10px 12px;margin-bottom:14px;"></div>
      <div id="paypal-buttons" style="min-height:120px;"><div style="text-align:center;color:var(--ink-soft);font-size:13.5px;padding:30px 0;">Loading secure checkout…</div></div>
      <div class="actions" style="margin-top:14px;"><button class="btn btn-outline-navy btn-sm" id="closeCheckout">Cancel</button></div>`);
    document.getElementById('closeCheckout').addEventListener('click', close);

    const chosen = () => {
      if (!needsPick) return Object.keys(MODULES);
      const r = document.querySelector('input[name="pickModule"]:checked');
      return r ? [r.value] : [];
    };

    loadPayPal().then(() => {
      const holder = document.getElementById('paypal-buttons');
      if (!holder) return;               // modal was closed while loading
      holder.innerHTML = '';
      paypal.Buttons({
        style: { layout: 'vertical', shape: 'rect', label: 'pay' },

        createOrder: (data, actions) => {
          const modules = chosen();
          if (!modules.length) {
            showError('Please choose a module first.');
            return Promise.reject(new Error('no-module'));
          }
          return actions.order.create({
            purchase_units: [{
              description: ('UK Citizenship Prep - ' + plan.name + ' (' + modules.map(m => MODULES[m]).join(', ') + ')').slice(0, 127),
              custom_id: modules.join(',').slice(0, 127),
              amount: { currency_code: SITE_CONFIG.currency, value: plan.price }
            }]
          });
        },

        onApprove: (data, actions) =>
          actions.order.capture().then(details => {
            if (details && details.status === 'COMPLETED') {
              // Grant exactly what the order itself says was bought, not what
              // the page happens to show now.
              const bought = ((details.purchase_units || [])[0] || {}).custom_id;
              const modules = (bought ? bought.split(',') : chosen()).filter(isModule);
              const stored = grant(modules, details.id, planId);
              showSuccess(planId, modules, details.id);
              if (!stored) {
                const box = document.querySelector('#checkoutTitle');
                if (box) box.insertAdjacentHTML('afterend',
                  '<p style="color:var(--red);font-size:13.5px;">Your payment went through, but this browser is blocking storage, so access could not be saved. Please email support with your order ID.</p>');
              }
            } else {
              showError('PayPal did not confirm the payment. You have not been charged unless PayPal tells you otherwise — check your PayPal account before trying again.');
            }
          }),

        onCancel: () => showError('Payment cancelled. You have not been charged.'),
        onError: err => {
          if (err && err.message === 'no-module') return;
          showError('Something went wrong with PayPal. Please try again in a moment.');
        }
      }).render('#paypal-buttons');
    }).catch(() => {
      const holder = document.getElementById('paypal-buttons');
      if (holder) holder.innerHTML = '';
      showError('Could not load PayPal. Check your connection or ad-blocker and try again.');
    });
  }

  return { hasAccess, modulesOwned, openCheckout, isConfigured, MODULES };
})();

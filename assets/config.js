// ============================================================================
// SITE CONFIG — the only file you need to edit to switch payments on.
// ============================================================================
//
// 1. Paste your PayPal CLIENT ID below (NOT the secret — never put the secret
//    in any file on this site, it would be public).
//      - While testing:  use the SANDBOX client ID
//      - When going live: swap in the LIVE client ID
//    Both are at developer.paypal.com → Apps & Credentials.
//
// 2. Set your support email so buyers know how to reach you about a payment.
//
// Until the client ID is replaced, the site shows "payments coming soon"
// instead of a broken checkout, so it is safe to publish this file as-is.

const SITE_CONFIG = {
  paypalClientId: 'YOUR_PAYPAL_CLIENT_ID',
  currency: 'GBP',
  supportEmail: '',            // e.g. 'help@yourdomain.com'

  // The price charged by PayPal comes from here. If you change a price,
  // the price shown on the Premium page updates automatically.
  plans: {
    module: { name: 'Single Module',   price: '4.99' },
    bundle: { name: 'Complete Bundle', price: '7.99' }
  }
};

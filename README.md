# UK Citizenship Prep

An independent, static study site covering three modules:

1. **Life in the UK** — study mode, timed mock exam, flashcards
2. **English (B1)** — grammar, vocabulary, reading, functional English, listening
3. **IELTS** — format guide, band scale, timed practice, writing room, speaking practice

No build step, no framework, no backend. Plain HTML, CSS and vanilla JavaScript.

---

## Running it

**Locally — just open it.** Double-click `index.html`. Everything works from the file system.

**Locally with a server** (closer to production, avoids any file:// quirks):

```bash
cd uk-citizenship-prep-site
python3 -m http.server 8000
# then open http://localhost:8000
```

**Publishing on GitHub Pages:**

```bash
git init
git add .
git commit -m "UK Citizenship Prep site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**. The site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

The only external request is the Google Fonts stylesheet. Everything else is local.

---

## Structure

```
index.html              Home
study.html              Life in the UK — chapter-by-chapter study mode
practice.html           Life in the UK — 24 question / 45 min mock exam
flashcards.html         Life in the UK — flashcard deck
english.html            English (B1) — 18 question / 20 min practice exam
ielts.html              IELTS — format, versions, band scale
ielts-practice.html     IELTS — 20 question / 25 min Reading & Listening practice
ielts-speaking.html     IELTS — Parts 1–3, cue cards with live timers
ielts-writing.html      IELTS — task bank, timer, word counter, rubric
premium.html            Plans and FAQ

assets/
  style.css             All styling. Design tokens at the top under :root
  config.js             PayPal client ID, currency, prices, support email
  premium.js            Entitlement storage + PayPal checkout modal
  app.js                Nav, footer year, accordions
  quiz-engine.js        Reusable timed multiple-choice engine
  ielts.js              Tabs, countdown timers, word counter, rubric
  questions-uk.js       124 Life in the UK questions + 28 flashcards
  questions-english.js  72 English (B1) questions across 5 groups
  questions-ielts.js    40 IELTS questions + format data, writing and speaking banks
  *.svg                 Logo and illustrations
```

**236 questions total.** All content is original and written for this site. Nothing is copied from the official Life in the UK handbook or from any published IELTS paper.

---

## Adding questions

Every question in every bank uses the same shape:

```js
{
  group: 3,                                  // must match an id in the groups array
  passage: "<b>Optional</b> reading text",   // omit if not needed
  q: "The question text",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  correct: 1,                                // zero-indexed
  ex: "Why this answer is right, and ideally why the others are wrong."
}
```

Add the object to the relevant array in `assets/questions-*.js` and it is immediately picked up by the quiz engine, the study page and the score breakdown. No other file needs touching.

To add a **group**, add `{ id: 6, title: "..." }` to the groups array in the same file.

To add an **IELTS writing task**, append to `IELTS_WRITING` — it needs `id`, `version`, `task`, `minutes`, `words`, `prompt`, `data`, `structure[]` and `language[]`.

To add a **speaking cue card**, append to `IELTS_SPEAKING_P2` with `card`, `bullets[]`, `followUp` and `ideas[]`.

---

## Reusing the quiz engine

`initQuizEngine(config)` drives all three timed exams. To add a fourth:

```js
initQuizEngine({
  setupId: 'testSetup',
  quizAreaId: 'quizArea',
  resultsId: 'resultsArea',
  limitNoteId: 'dailyLimitNote',
  startBtnId: 'startTestBtn',
  questions: YOUR_QUESTIONS,
  groups: YOUR_GROUPS,      // omit for no topic breakdown
  testLength: 20,
  testSeconds: 25 * 60,
  passMark: 0.75,
  freeLimit: 3
});
```

---

## Payments (PayPal)

Checkout uses PayPal's client-side Smart Buttons. To switch it on:

1. Open `assets/config.js` and paste your PayPal **Client ID** into `paypalClientId`. Never paste the Secret.
2. Test with the **Sandbox** client ID and a sandbox buyer account first, then swap in the **Live** client ID.
3. Set `supportEmail` so buyers can reach you about a payment.

Until the client ID is replaced, the Premium page shows "payments coming soon" instead of a broken checkout.

**Making payments tamper-proof.** Paid access is saved in the buyer's browser (`localStorage`), so a technically confident user could grant themselves access with dev tools. That is acceptable for a low-priced prototype but not for a real product. The upgrade path is a small serverless function (Cloudflare Workers, Netlify Functions or Vercel) that captures the order using your PayPal **Secret**, verifies it, and returns a signed access token that the site checks. The secret must live only on that server.

## Known limitations

These are deliberate for a static site, and are the first things to address if this becomes a real product.

- **The free-test limit is not enforceable.** `freeLimit` lives in a JavaScript variable and resets on page refresh. Real metering needs accounts and a server.
- **No progress is saved.** Scores, written answers and flashcard position are lost on refresh. Everything is in memory.
- **IELTS Listening has no audio.** Listening items are written as transcripts to read. Real preparation needs recordings, since processing speech in real time is most of the difficulty.
- **Writing is self-assessed.** The rubric is a plain-language study checklist, not the official band descriptors, and ticking boxes is not a band score.
- **Payment unlock is client-side.** See *Payments* below.

---

## Disclaimer

This is an independent study aid. It is not affiliated with, endorsed by, or produced by the Home Office, UK Visas and Immigration, gov.uk, the British Council, IDP or Cambridge Assessment English.

It does not replace the official *Life in the United Kingdom* handbook, and it is not a Secure English Language Test (SELT). English-language and civic-knowledge requirements differ by immigration route and change over time — always confirm current requirements at **gov.uk** and book tests through officially approved providers.

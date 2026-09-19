// Behaviour for the IELTS pages: tab panels, word counter, countdown timers,
// the self-assessment rubric, and the speaking cue-card shuffler.

/* ---------- Tabs (used on ielts.html, ielts-writing.html, ielts-speaking.html) ---------- */
function initTabs(containerId) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const tabs = wrap.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      wrap.querySelectorAll('.tabpanel').forEach(p => {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
}

/* ---------- Countdown timer ---------- */
// Returns handles so a page can drive several independent timers.
function makeTimer(displayEl, labelEl, onDone) {
  let remaining = 0, id = null, running = false;

  function paint() {
    const m = Math.floor(Math.abs(remaining) / 60);
    const s = Math.abs(remaining) % 60;
    displayEl.textContent = `${remaining < 0 ? '-' : ''}${m}:${s.toString().padStart(2, '0')}`;
    displayEl.classList.toggle('warn', remaining <= 60);
  }

  function tick() {
    remaining--;
    paint();
    if (remaining <= 0) {
      stop();
      if (labelEl) labelEl.textContent = 'Time is up';
      if (onDone) onDone();
    }
  }

  function start(seconds) {
    stop();
    remaining = seconds;
    paint();
    running = true;
    id = setInterval(tick, 1000);
  }
  function stop() {
    if (id) clearInterval(id);
    id = null;
    running = false;
  }
  function toggle() {
    if (running) stop();
    else if (remaining > 0) { running = true; id = setInterval(tick, 1000); }
  }
  function reset(seconds) { stop(); remaining = seconds; paint(); }

  return { start, stop, toggle, reset, isRunning: () => running };
}

/* ---------- Live word counter ---------- */
// Binds once per textarea. Calling it again only changes the minimum, so
// loading a new writing task does not stack duplicate listeners.
function initWordCounter(textareaId, counterId, minimum) {
  const ta = document.getElementById(textareaId);
  const out = document.getElementById(counterId);
  if (!ta || !out) return;

  function count() {
    const min = parseInt(ta.dataset.minWords, 10) || 0;
    const words = ta.value.trim().split(/\s+/).filter(Boolean).length;
    const meets = words >= min;
    out.innerHTML = `<b>${words}</b> words · minimum ${min}`;
    out.classList.toggle('ok', meets);
    out.classList.toggle('short', !meets && words > 0);
  }

  ta.dataset.minWords = minimum;
  if (!ta.dataset.counterBound) {
    ta.addEventListener('input', count);
    ta.dataset.counterBound = '1';
  }
  count();
}

/* ---------- Self-assessment rubric ---------- */
function renderRubric(wrapId, scoreId, rubric) {
  const wrap = document.getElementById(wrapId);
  if (!wrap) return;
  wrap.innerHTML = rubric.map((r, ri) => `
    <div class="rubric-col">
      <h4>${r.crit}</h4>
      ${r.checks.map((c, ci) => `
        <label><input type="checkbox" data-crit="${ri}" id="rb${ri}_${ci}"> <span>${c}</span></label>
      `).join('')}
    </div>`).join('');

  const total = rubric.reduce((n, r) => n + r.checks.length, 0);
  function update() {
    const done = wrap.querySelectorAll('input:checked').length;
    const el = document.getElementById(scoreId);
    if (!el) return;
    let verdict;
    const pct = done / total;
    if (done === 0) verdict = 'Tick each point you are confident you met.';
    else if (pct < 0.5) verdict = 'Several criteria are unmet — revise before moving on.';
    else if (pct < 0.8) verdict = 'A reasonable draft. Target the unticked boxes next.';
    else verdict = 'Strong self-assessment. Now get a teacher or examiner to confirm it.';
    el.innerHTML = `<div class="n">${done} / ${total}</div><div style="font-size:13.5px;color:#9BA3BC;">${verdict}</div>`;
  }
  wrap.addEventListener('change', update);
  update();
}

/* ---------- Random item helper ---------- */
function pickDifferent(array, currentIndex) {
  if (array.length < 2) return 0;
  let i = currentIndex;
  while (i === currentIndex) i = Math.floor(Math.random() * array.length);
  return i;
}

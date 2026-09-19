// Reusable mock-exam engine. Works entirely in memory — nothing is sent
// anywhere and nothing persists after the page is refreshed.
function initQuizEngine(cfg) {
  const letters = ['A','B','C','D'];
  const session = { testsTaken: 0 };
  // Paid access is checked live so it takes effect straight after purchase.
  const isUnlocked = () => typeof Premium !== 'undefined' && cfg.module && Premium.hasAccess(cfg.module);

  const els = {
    setup: document.getElementById(cfg.setupId),
    quizArea: document.getElementById(cfg.quizAreaId),
    results: document.getElementById(cfg.resultsId),
    limitNote: document.getElementById(cfg.limitNoteId),
    startBtn: document.getElementById(cfg.startBtnId)
  };

  let quiz = null;

  function shuffled(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  function groupName(id) {
    if (!cfg.groups) return '';
    const g = cfg.groups.find(g => g.id === id);
    return g ? g.title : '';
  }

  function startTest() {
    if (!isUnlocked() && session.testsTaken >= cfg.freeLimit) {
      if (els.limitNote) els.limitNote.style.display = 'block';
      return;
    }
    session.testsTaken++;
    quiz = {
      questions: shuffled(cfg.questions, cfg.testLength),
      answers: new Array(cfg.testLength).fill(null),
      index: 0,
      timeLeft: cfg.testSeconds
    };
    els.setup.classList.add('hidden');
    els.results.classList.add('hidden');
    els.quizArea.classList.remove('hidden');
    renderQuestion();
    quiz.timerId = setInterval(tick, 1000);
  }

  function tick() {
    quiz.timeLeft--;
    updateTimer();
    if (quiz.timeLeft <= 0) {
      clearInterval(quiz.timerId);
      finish();
    }
  }

  function updateTimer() {
    const t = document.getElementById('quizTimer');
    if (!t) return;
    const m = Math.floor(quiz.timeLeft / 60), s = quiz.timeLeft % 60;
    t.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    t.classList.toggle('warn', quiz.timeLeft < 120);
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    const answered = quiz.answers[quiz.index];
    els.quizArea.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-top">
          <div>Question ${quiz.index + 1} of ${cfg.testLength}</div>
          <div class="timer" id="quizTimer"></div>
        </div>
        <div class="progressbar"><div class="progressbar-fill" style="width:${(quiz.index / cfg.testLength) * 100}%"></div></div>
        <div class="quiz-body">
          ${cfg.groups ? `<div class="quiz-chapter-tag">${groupName(q.group)}</div>` : ''}
          ${q.passage ? `<div class="quiz-passage">${q.passage}</div>` : ''}
          <div class="quiz-q">${q.q}</div>
          <div class="options" id="optionsWrap">
            ${q.opts.map((opt, i) => `
              <button class="option" data-i="${i}">
                <span class="letter">${letters[i]}</span><span>${opt}</span>
              </button>`).join('')}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-outline-navy" id="prevQ" ${quiz.index === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn btn-navy" id="nextQ">${quiz.index === cfg.testLength - 1 ? 'Submit exam' : 'Next →'}</button>
        </div>
      </div>`;
    updateTimer();

    document.querySelectorAll('#optionsWrap .option').forEach(btn => {
      btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.i)));
    });
    document.getElementById('prevQ').addEventListener('click', () => { quiz.index--; renderQuestion(); });
    document.getElementById('nextQ').addEventListener('click', () => {
      if (quiz.index === cfg.testLength - 1) finish();
      else { quiz.index++; renderQuestion(); }
    });
    if (answered !== null) markSelected(answered);
  }

  function selectOption(i) {
    quiz.answers[quiz.index] = i;
    markSelected(i);
  }
  function markSelected(i) {
    document.querySelectorAll('#optionsWrap .option').forEach((btn, idx) => {
      btn.classList.toggle('selected', idx === i);
    });
  }

  function finish() {
    clearInterval(quiz.timerId);
    els.quizArea.classList.add('hidden');
    els.results.classList.remove('hidden');

    let correct = 0;
    const byGroup = {};
    if (cfg.groups) cfg.groups.forEach(g => byGroup[g.id] = { total: 0, correct: 0 });
    quiz.questions.forEach((q, i) => {
      if (cfg.groups) byGroup[q.group].total++;
      if (quiz.answers[i] === q.correct) {
        correct++;
        if (cfg.groups) byGroup[q.group].correct++;
      }
    });
    const pct = Math.round((correct / cfg.testLength) * 100);
    const passed = correct / cfg.testLength >= cfg.passMark;

    els.results.innerHTML = `
      <div class="quiz-shell results">
        <div class="score">${correct}/${cfg.testLength}</div>
        <div class="verdict ${passed ? 'pass' : 'fail'}">${passed ? 'Pass — well done' : 'Not yet a pass'} · ${pct}%</div>
        ${cfg.groups ? `<div class="breakdown">
          ${cfg.groups.map(g => {
            const b = byGroup[g.id];
            const p = b.total ? Math.round((b.correct / b.total) * 100) : 0;
            return `<div class="breakdown-row">
              <span>${g.title}</span>
              <span style="display:flex;align-items:center;gap:8px;">
                <span class="breakdown-bar"><span style="width:${p}%"></span></span>
                ${b.correct}/${b.total}
              </span>
            </div>`;
          }).join('')}
        </div>` : ''}
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-navy" id="reviewBtn">Review answers</button>
          <button class="btn btn-outline-navy" id="retakeBtn">Take another test</button>
        </div>
      </div>
      <div id="reviewArea"></div>`;

    document.getElementById('retakeBtn').addEventListener('click', () => {
      els.results.classList.add('hidden');
      els.setup.classList.remove('hidden');
      if (!isUnlocked() && session.testsTaken >= cfg.freeLimit && els.limitNote) {
        els.limitNote.style.display = 'block';
      }
    });
    document.getElementById('reviewBtn').addEventListener('click', renderReview);
  }

  function renderReview() {
    const wrap = document.getElementById('reviewArea');
    wrap.innerHTML = quiz.questions.map((q, i) => {
      const chosen = quiz.answers[i];
      const isCorrect = chosen === q.correct;
      return `<div class="quiz-shell" style="margin-top:14px;">
        <div class="quiz-body">
          ${cfg.groups ? `<div class="quiz-chapter-tag">${groupName(q.group)} · Question ${i + 1}</div>` : `<div class="quiz-chapter-tag">Question ${i + 1}</div>`}
          ${q.passage ? `<div class="quiz-passage">${q.passage}</div>` : ''}
          <div class="quiz-q" style="font-size:16px;">${q.q}</div>
          <div class="options">
            ${q.opts.map((opt, idx) => {
              let cls = 'option';
              if (idx === q.correct) cls += ' correct';
              else if (idx === chosen && !isCorrect) cls += ' incorrect';
              return `<div class="${cls}"><span class="letter">${letters[idx]}</span><span>${opt}</span></div>`;
            }).join('')}
          </div>
          <div class="explain show">${q.ex}</div>
        </div>
      </div>`;
    }).join('');
  }

  if (els.startBtn) els.startBtn.addEventListener('click', startTest);

  // Nothing to expose: unlocking is handled by assets/premium.js.
}

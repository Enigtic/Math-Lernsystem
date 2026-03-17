// ═══════════════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════════════
const SK = "mathe_abitur_2026_v3";
let S = {};
try { const r = localStorage.getItem(SK); S = r ? JSON.parse(r) : {}; } catch {}
const save = () => { try { localStorage.setItem(SK, JSON.stringify(S)); } catch {} };
const isChecked = id => !!S["c_" + id];
const toggle = id => { S["c_" + id] = !S["c_" + id]; if (!S["c_" + id]) delete S["c_" + id]; save(); };
const isPanelOpen = id => !!S["p_" + id];
const togglePanelState = id => { S["p_" + id] = !S["p_" + id]; if (!S["p_" + id]) delete S["p_" + id]; save(); };
const getTab = id => S["t_" + id] || "plain";
const setTab = (id, t) => { S["t_" + id] = t; save(); };
const isSolOpen = id => !!S["s_" + id];
const toggleSolState = id => { S["s_" + id] = !S["s_" + id]; if (!S["s_" + id]) delete S["s_" + id]; save(); };

// ═══════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════
const subProg = s => {
  let t = 0, d = 0;
  s.sections.forEach(sec => sec.items.forEach((_, i) => { t++; if (isChecked(sec.id + "-" + i)) d++; }));
  return { t, d, pct: t ? Math.round(d / t * 100) : 0 };
};
const secProg = sec => {
  let d = 0;
  sec.items.forEach((_, i) => { if (isChecked(sec.id + "-" + i)) d++; });
  return { t: sec.items.length, d };
};
const totProg = () => {
  let t = 0, d = 0;
  SUBJECTS.forEach(s => { const p = subProg(s); t += p.t; d += p.d; });
  return { t, d, pct: t ? Math.round(d / t * 100) : 0 };
};

// ═══════════════════════════════════════════════════════
// RENDER HELPERS
// ═══════════════════════════════════════════════════════
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function renderPlain(item) {
  return `<div class="plain-box">${item.plain}</div>`;
}

function renderPattern(item) {
  const stepsHtml = item.steps && item.steps.length
    ? `<ul class="pattern-steps">${item.steps.map((s, i) => `<li data-n="${i + 1}">${s}</li>`).join("")}</ul>` : "";
  const vsHtml = (item.vsWrong && item.vsRight)
    ? `<div class="vs-box"><div class="vs-label">⚠ Verwechslungsgefahr</div><div class="vs-text"><span class="wrong">✗ ${item.vsWrong}</span><br><span class="right">✓ ${item.vsRight}</span></div></div>` : "";
  return `<div class="pattern-box"><div class="pattern-label">🎯 Wann & wie benutze ich das?</div><div class="pattern-text">${item.pattern}</div>${stepsHtml}</div>${vsHtml}`;
}

function renderExamples(item, itemId) {
  if (!item.examples || !item.examples.length) return `<p style="color:var(--text3);padding:12px">Keine Beispiele vorhanden.</p>`;
  const diffLabel = { easy: "Leicht", medium: "Mittel", hard: "Schwer" };
  return `<div class="examples-wrap">${item.examples.map((ex, ei) => {
    const exId = `${itemId}-ex${ei}`;
    const solOpen = isSolOpen(exId);
    const stepsHtml = ex.steps ? ex.steps.map(st => `<div class="solution-step"><div class="step-num">${st.n}.</div><div class="step-text">${st.t}</div></div>`).join("") : "";
    return `<div class="example-box">
      <div class="example-header">
        <span class="example-num">Aufgabe ${ei + 1}</span>
        <span class="example-diff diff-${ex.diff}">${diffLabel[ex.diff] || ex.diff}</span>
      </div>
      <div class="example-body">
        <div class="example-q">${ex.q}</div>
        <button class="solution-toggle" onclick="toggleSolution('${exId}', this)">
          ${solOpen ? "Lösung verbergen ▲" : "Lösung anzeigen ▼"}
        </button>
        <div class="solution ${solOpen ? "open" : ""}" id="sol-${exId}">
          ${stepsHtml}
          ${ex.result ? `<div class="solution-result">✓ Ergebnis: ${ex.result}</div>` : ""}
        </div>
      </div>
    </div>`;
  }).join("")}</div>`;
}

function renderCS(item) {
  if (!item.csConnections || !item.csConnections.length) return `<p style="color:var(--text3);padding:12px">Keine CS-Verbindungen vorhanden.</p>`;
  return `<div class="cs-box">
    <div class="cs-header"><span class="cs-header-title">💻 Informatik & Computer Science — wo wird das wirklich genutzt?</span></div>
    <div class="cs-connections">${item.csConnections.map(c => `
      <div class="cs-connection">
        <div class="cs-con-title">${c.title}<span class="cs-tag">${c.tag}</span></div>
        <div class="cs-con-text">${c.text}</div>
      </div>`).join("")}
    </div>
  </div>`;
}

function renderDetailPanel(item, itemId) {
  const activeTab = getTab(itemId);
  const tabs = [
    { id: "plain", label: "💬 Erklärung" },
    { id: "pattern", label: "🎯 Pattern" },
    { id: "examples", label: `📝 Aufgaben (${item.examples ? item.examples.length : 0})` },
    { id: "cs", label: `💻 CS (${item.csConnections ? item.csConnections.length : 0})` },
  ];
  return `
    <div class="detail-tab-bar">
      ${tabs.map(t => `<div class="detail-tab ${activeTab === t.id ? "active" : ""}" onclick="switchTab('${itemId}','${t.id}')">${t.label}</div>`).join("")}
    </div>
    <div class="detail-content ${activeTab === "plain" ? "active" : ""}" id="tc-plain-${itemId}">${renderPlain(item)}</div>
    <div class="detail-content ${activeTab === "pattern" ? "active" : ""}" id="tc-pattern-${itemId}">${renderPattern(item)}</div>
    <div class="detail-content ${activeTab === "examples" ? "active" : ""}" id="tc-examples-${itemId}">${renderExamples(item, itemId)}</div>
    <div class="detail-content ${activeTab === "cs" ? "active" : ""}" id="tc-cs-${itemId}">${renderCS(item)}</div>
  `;
}

function renderItem(item, secId, idx, color) {
  const id = `${secId}-${idx}`;
  const done = isChecked(id);
  const panOpen = isPanelOpen(id);
  return `<div class="check-item ${done ? "done" : ""}" id="ci-${id}">
    <div class="check-row" onclick="handleCheck('${id}','${secId}')">
      <div class="check-box" id="cb-${id}" style="${done ? `border-color:${color};background:${color}` : ""}">
        <span class="check-tick" style="opacity:${done ? 1 : 0};transform:${done ? "scale(1) rotate(0)" : "scale(0) rotate(-15deg)"}">✓</span>
      </div>
      <div class="check-content">
        <div class="check-text">${item.text}</div>
        <div class="check-ref">📄 ${item.ref}</div>
      </div>
    </div>
    <button class="expand-btn" onclick="togglePanel('${id}')">
      <span class="expand-arrow ${panOpen ? "open" : ""}" id="ea-${id}">▶</span>
      <span id="el-${id}">${panOpen ? "Details verbergen" : "▸ Details · Formeln · Aufgaben · CS-Verbindung"}</span>
    </button>
    <div class="detail-panel ${panOpen ? "open" : ""}" id="panel-${id}">
      ${panOpen ? renderDetailPanel(item, id) : ""}
    </div>
  </div>`;
}

const openSecs = new Set();

function renderSection(sec, color) {
  const p = secProg(sec);
  const open = openSecs.has(sec.id);
  const pct = p.t ? Math.round(p.d / p.t * 100) : 0;
  return `<div class="section-block" id="sb-${sec.id}">
    <div class="section-header" onclick="toggleSec('${sec.id}')">
      <span class="section-toggle ${open ? "open" : ""}" id="st-${sec.id}">▶</span>
      <span class="section-accent-bar" style="background:${color}"></span>
      <div class="section-title-wrap">
        <div class="section-title">${sec.title}</div>
        <div class="section-meta" id="sm-${sec.id}">${p.d} von ${p.t} abgehakt</div>
      </div>
      <div class="section-prog">
        <div class="sec-mini-bar"><div class="sec-mini-fill" id="smf-${sec.id}" style="background:${color};width:${pct}%"></div></div>
        <span class="sec-count" id="sc2-${sec.id}">${p.d}/${p.t}</span>
      </div>
    </div>
    <div class="section-body ${open ? "open" : ""}" id="secbody-${sec.id}">
      ${sec.items.map((item, i) => renderItem(item, sec.id, i, color)).join("")}
    </div>
  </div>`;
}

function renderSubject(s) {
  const p = subProg(s);
  return `<div class="subject-block" id="subject-${s.id}">
    <div class="subject-hero" style="background:${s.bgColor};border:1px solid ${s.color}33">
      <div class="subject-num" style="color:${s.color}">${s.num}</div>
      <div class="subject-name" style="color:${s.color}">${s.title}</div>
      <div class="subject-subtitle">${s.subtitle}</div>
      <div class="subject-refs">
        <span class="ref-chip">📚 ${s.bookRef}</span>
        <span class="ref-chip" style="color:var(--gold)">📐 ${s.formelRef}</span>
      </div>
      <div class="subject-stats">
        <div class="subject-prog-bar"><div class="subject-prog-fill" id="spf-${s.id}" style="width:${p.pct}%"></div></div>
        <div class="subject-pct" id="spct-${s.id}">${p.pct}%</div>
        <div class="subject-count" id="scnt-${s.id}">${p.d}/${p.t}</div>
      </div>
    </div>
    ${s.sections.map(sec => renderSection(sec, s.color)).join("")}
  </div>`;
}

function renderSidebar() {
  document.getElementById("sidebar-nav").innerHTML = SUBJECTS.map(s => {
    const p = subProg(s);
    return `<div class="nav-subject" id="nav-${s.id}">
      <button class="nav-subject-btn" onclick="goSubject('${s.id}')">
        <span class="nav-dot" style="background:${s.color}"></span>
        <span class="nav-subject-name">${s.title}</span>
        <span class="nav-pct" id="npct-${s.id}">${p.pct}%</span>
      </button>
      <div class="nav-mini-bar"><div class="nav-mini-fill" id="nbar-${s.id}" style="background:${s.color};width:${p.pct}%"></div></div>
      <div class="nav-sections">${s.sections.map(sec => `<span class="nav-sec-link" onclick="goSection('${sec.id}')">${sec.title}</span>`).join("")}</div>
    </div>`;
  }).join("");
}

// ═══════════════════════════════════════════════════════
// INTERACTIONS
// ═══════════════════════════════════════════════════════
function handleCheck(itemId, secId) {
  toggle(itemId);
  const done = isChecked(itemId);
  const ci = document.getElementById("ci-" + itemId);
  if (!ci) return;
  ci.classList.toggle("done", done);
  const cb = document.getElementById("cb-" + itemId);
  const subject = SUBJECTS.find(s => s.sections.some(sec => sec.id === secId));
  const color = subject ? subject.color : "var(--green)";
  if (cb) { cb.style.borderColor = done ? color : ""; cb.style.background = done ? color : ""; }
  const tick = ci.querySelector(".check-tick");
  if (tick) { tick.style.opacity = done ? "1" : "0"; tick.style.transform = done ? "scale(1) rotate(0)" : "scale(0) rotate(-15deg)"; }
  updateSecProgress(secId);
  if (subject) updateSubProgress(subject);
  updateTotProgress();
}

function togglePanel(itemId) {
  togglePanelState(itemId);
  const open = isPanelOpen(itemId);
  const panel = document.getElementById("panel-" + itemId);
  const arrow = document.getElementById("ea-" + itemId);
  const label = document.getElementById("el-" + itemId);
  if (!panel) return;
  panel.classList.toggle("open", open);
  if (arrow) arrow.classList.toggle("open", open);
  if (label) label.textContent = open ? "Details verbergen" : "▸ Details · Formeln · Aufgaben · CS-Verbindung";

  // Lazy render content when first opened
  if (open && !panel.dataset.rendered) {
    const secId = itemId.substring(0, itemId.lastIndexOf("-"));
    const idx = parseInt(itemId.split("-").pop());
    const sec = SUBJECTS.flatMap(s => s.sections).find(s => s.id === secId);
    const item = sec ? sec.items[idx] : null;
    if (item) {
      panel.innerHTML = renderDetailPanel(item, itemId);
      panel.dataset.rendered = "1";
    }
  }
}

function switchTab(itemId, tab) {
  setTab(itemId, tab);
  const panel = document.getElementById("panel-" + itemId);
  if (!panel) return;
  panel.querySelectorAll(".detail-tab").forEach((el, i) => {
    el.classList.toggle("active", ["plain", "pattern", "examples", "cs"][i] === tab);
  });
  panel.querySelectorAll(".detail-content").forEach(el => el.classList.remove("active"));
  const tc = document.getElementById(`tc-${tab}-${itemId}`);
  if (tc) tc.classList.add("active");
}

function toggleSolution(exId, btn) {
  toggleSolState(exId);
  const open = isSolOpen(exId);
  const sol = document.getElementById("sol-" + exId);
  if (sol) sol.classList.toggle("open", open);
  if (btn) btn.textContent = open ? "Lösung verbergen ▲" : "Lösung anzeigen ▼";
}

function toggleSec(secId) {
  const body = document.getElementById("secbody-" + secId);
  const tog = document.getElementById("st-" + secId);
  const open = !openSecs.has(secId);
  if (open) openSecs.add(secId); else openSecs.delete(secId);
  if (body) body.classList.toggle("open", open);
  if (tog) tog.classList.toggle("open", open);
}

function goSubject(id) {
  const el = document.getElementById("subject-" + id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelectorAll(".nav-subject-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".nav-subject").forEach(n => n.classList.remove("active"));
  const nav = document.getElementById("nav-" + id);
  if (nav) { nav.classList.add("active"); nav.querySelector(".nav-subject-btn").classList.add("active"); }
}

function goSection(secId) {
  if (!openSecs.has(secId)) toggleSec(secId);
  setTimeout(() => {
    const el = document.getElementById("sb-" + secId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}

// ═══════════════════════════════════════════════════════
// PROGRESS UPDATES
// ═══════════════════════════════════════════════════════
function updateSecProgress(secId) {
  const sec = SUBJECTS.flatMap(s => s.sections).find(s => s.id === secId);
  if (!sec) return;
  const p = secProg(sec);
  const pct = p.t ? Math.round(p.d / p.t * 100) : 0;
  const mf = document.getElementById("smf-" + secId);
  const cnt = document.getElementById("sc2-" + secId);
  const meta = document.getElementById("sm-" + secId);
  if (mf) mf.style.width = pct + "%";
  if (cnt) cnt.textContent = `${p.d}/${p.t}`;
  if (meta) meta.textContent = `${p.d} von ${p.t} abgehakt`;
}

function updateSubProgress(s) {
  const p = subProg(s);
  const ids = [["spf", el => el.style.width = p.pct + "%"],
               ["spct", el => el.textContent = p.pct + "%"],
               ["scnt", el => el.textContent = `${p.d}/${p.t}`],
               ["npct", el => el.textContent = p.pct + "%"],
               ["nbar", el => el.style.width = p.pct + "%"]];
  ids.forEach(([prefix, fn]) => { const el = document.getElementById(prefix + "-" + s.id); if (el) fn(el); });
}

function updateTotProgress() {
  const p = totProg();
  const bar = document.getElementById("total-bar");
  const pct = document.getElementById("total-pct");
  const cnt = document.getElementById("total-count");
  if (bar) bar.style.width = p.pct + "%";
  if (pct) pct.textContent = p.pct + "%";
  if (cnt) cnt.textContent = `${p.d} / ${p.t} Themen`;
}

// ═══════════════════════════════════════════════════════
// RESET
// ═══════════════════════════════════════════════════════
function confirmReset() { document.getElementById("modal").classList.add("show"); }
function closeModal() { document.getElementById("modal").classList.remove("show"); }
function doReset() {
  // keep tab+solution state, wipe checks and panels
  const ns = {};
  Object.keys(S).forEach(k => { if (k.startsWith("t_") || k.startsWith("s_")) ns[k] = S[k]; });
  S = ns; save(); closeModal();
  document.querySelectorAll(".check-item").forEach(ci => {
    ci.classList.remove("done");
    const cb = ci.querySelector(".check-box"); if (cb) { cb.style.borderColor = ""; cb.style.background = ""; }
    const tick = ci.querySelector(".check-tick"); if (tick) { tick.style.opacity = "0"; tick.style.transform = "scale(0) rotate(-15deg)"; }
  });
  document.querySelectorAll(".detail-panel").forEach(p => p.classList.remove("open"));
  document.querySelectorAll(".expand-arrow").forEach(a => a.classList.remove("open"));
  document.querySelectorAll(".expand-btn span:last-child").forEach(s => s.textContent = "▸ Details · Formeln · Aufgaben · CS-Verbindung");
  updateTotProgress();
  SUBJECTS.forEach(s => { updateSubProgress(s); s.sections.forEach(sec => updateSecProgress(sec.id)); });
  showToast("Fortschritt zurückgesetzt ✓");
}

// ═══════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

document.getElementById("modal").addEventListener("click", function (e) { if (e.target === this) closeModal(); });

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
renderSidebar();
document.getElementById("main-content").innerHTML = SUBJECTS.map(renderSubject).join("");
updateTotProgress();
SUBJECTS.forEach(s => { updateSubProgress(s); s.sections.forEach(sec => updateSecProgress(sec.id)); });

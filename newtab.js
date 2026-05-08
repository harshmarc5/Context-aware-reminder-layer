'use strict';

var STORE = 'tabspark_v5';

/* Pure inline SVG icons — zero network requests, always render */
var SHORTCUTS = [
  {
    label: 'YouTube', url: 'https://youtube.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><rect width="48" height="48" rx="10" fill="#FF0000"/><polygon points="19,14 19,34 36,24" fill="white"/></svg>'
  },
  {
    label: 'Play Store', url: 'https://play.google.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><defs><linearGradient id="ps1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00C4FF"/><stop offset="100%" stop-color="#0082FF"/></linearGradient><linearGradient id="ps2" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#FFD600"/><stop offset="100%" stop-color="#FF8A00"/></linearGradient></defs><path d="M6 4l24 20L6 44V4z" fill="url(#ps1)"/><path d="M6 4l24 20 6-5L16 6z" fill="#00E676"/><path d="M6 44l24-20 6 5-14 12z" fill="url(#ps2)"/><path d="M36 19l-6 5 6 5 4-5z" fill="#FF3D00"/></svg>'
  },
  {
    label: 'Gmail', url: 'https://mail.google.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><path d="M4 8h40l-20 14z" fill="#EA4335"/><path d="M4 8v32h40V8L24 22z" fill="#FAFAFA"/><path d="M4 8v32h40V8L24 22 4 8z" fill="none"/><path d="M4 8l20 14 20-14v32H4z" fill="white"/><path d="M4 8l20 14L44 8H4z" fill="#EA4335"/><path d="M4 40V8l20 14 20-14v32" fill="none" stroke="#FBBC04" stroke-width="0"/><rect x="4" y="8" width="40" height="32" rx="2" fill="none" stroke="#DADCE0" stroke-width="1.5"/><path d="M4 10l20 14L44 10" stroke="#EA4335" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'
  },
  {
    label: 'Maps', url: 'https://maps.google.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><circle cx="24" cy="20" r="14" fill="#34A853"/><circle cx="24" cy="20" r="6" fill="white"/><path d="M24 34 C24 34 14 46 24 46 C34 46 24 34 24 34z" fill="#EA4335"/><circle cx="24" cy="20" r="3" fill="#4285F4"/></svg>'
  },
  {
    label: 'LinkedIn', url: 'https://linkedin.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><rect width="48" height="48" rx="8" fill="#0A66C2"/><rect x="10" y="18" width="7" height="22" fill="white"/><circle cx="13.5" cy="12" r="4" fill="white"/><path d="M20 18h7v3c1.5-2 4-3.5 7-3.5 6 0 9 4 9 10v12.5h-7V29c0-3-1-5-3.5-5s-5.5 2-5.5 6v10H20z" fill="white"/></svg>'
  },
  {
    label: 'Drive', url: 'https://drive.google.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><polygon points="24,6 44,40 4,40" fill="none"/><polygon points="4,40 16,40 24,26 12,6" fill="#0066DA"/><polygon points="44,40 32,40 24,26 36,6" fill="#00AC47"/><polygon points="12,6 36,6 44,40 4,40" fill="none"/><polygon points="24,6 36,6 44,40 32,40" fill="#FFBA00"/><polygon points="24,6 12,6 4,40 16,40" fill="#0066DA"/><polygon points="4,40 44,40 32,40 16,40" fill="none"/><polygon points="16,40 32,40 24,26" fill="#EA4335"/></svg>'
  },
  {
    label: 'GitHub', url: 'https://github.com',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><circle cx="24" cy="24" r="22" fill="#24292E"/><path d="M24 6C14 6 6 14 6 24c0 8 5.1 14.7 12.3 17.1.9.2 1.2-.4 1.2-.8v-3c-5 1.1-6-2.4-6-2.4-.8-2-2-2.6-2-2.6-1.6-1.1.1-1.1.1-1.1 1.8.1 2.7 1.8 2.7 1.8 1.6 2.7 4.2 1.9 5.2 1.5.2-1.1.6-1.9 1.1-2.3-4-.5-8.2-2-8.2-8.8 0-1.9.7-3.5 1.8-4.8-.2-.5-.8-2.3.2-4.7 0 0 1.5-.5 4.8 1.8A16.7 16.7 0 0 1 24 14c1.5 0 3 .2 4.4.5 3.3-2.2 4.8-1.8 4.8-1.8 1 2.4.4 4.2.2 4.7 1.1 1.3 1.8 2.9 1.8 4.8 0 6.9-4.2 8.4-8.2 8.8.6.6 1.2 1.7 1.2 3.4v5c0 .5.3 1 1.2.8C36.9 38.7 42 32 42 24c0-10-8-18-18-18z" fill="white"/></svg>'
  },
  {
    label: 'Claude', url: 'https://claude.ai',
    svg: '<svg viewBox="0 0 48 48" width="28" height="28"><circle cx="24" cy="24" r="22" fill="#D97706"/><text x="24" y="30" font-size="16" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">AI</text></svg>'
  },
];

var reminders = [];

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', function () {
  initSearch();
  initForm();
  initAiModal();
  initLens();
  renderShortcuts();
  loadAndRender();
});

/* ── Search ── */
function initSearch() {
  var el = document.getElementById('search');
  if (!el) return;
  setTimeout(function () { el.focus(); }, 100);

  el.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var v = el.value.trim();
    if (!v) return;
    navigate(v);
  });

  var gBtn = document.getElementById('btn-google-search');
  if (gBtn) gBtn.addEventListener('click', function () {
    var v = (document.getElementById('search') || {}).value || '';
    navigate(v || 'https://www.google.com');
  });

  var lucky = document.getElementById('btn-lucky');
  if (lucky) lucky.addEventListener('click', function () {
    var v = (document.getElementById('search') || {}).value || '';
    if (v) window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(v) + '&btnI=1';
    else   window.location.href = 'https://www.google.com/search?q=I%27m+Feeling+Lucky&btnI=1';
  });
}

function navigate(v) {
  var isUrl = /^https?:\/\//.test(v) || (/\./.test(v) && v.indexOf(' ') < 0 && v.length > 3);
  window.location.href = isUrl
    ? (v.startsWith('http') ? v : 'https://' + v)
    : 'https://www.google.com/search?q=' + encodeURIComponent(v);
}

/* ── Voice search ── */
/* (mic button — opens voice search) */
var voiceBtn = null;
document.addEventListener('DOMContentLoaded', function () {
  voiceBtn = document.getElementById('btn-voice');
  if (voiceBtn) voiceBtn.addEventListener('click', function () {
    window.open('https://www.google.com/webhp?#', '_blank');
  });
});

/* ── Google Lens button ── */
function initLens() {
  var btn = document.getElementById('btn-lens');
  if (!btn) return;
  btn.addEventListener('click', function () {
    window.open('https://lens.google.com', '_blank');
  });
}

/* ── AI Search modal ── */
function initAiModal() {
  var btn     = document.getElementById('btn-ai');
  var modal   = document.getElementById('ai-modal');
  var closeBtn= document.getElementById('ai-close');
  var input   = document.getElementById('ai-input');
  var chips   = document.querySelectorAll('.ai-chip');

  if (btn)    btn.addEventListener('click', function () {
    modal.classList.add('open');
    setTimeout(function () { if (input) input.focus(); }, 80);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeAi);

  if (modal) modal.addEventListener('click', function (e) {
    if (e.target === modal) closeAi();
  });

  if (input) input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      var q = input.value.trim();
      if (q) { window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank'); closeAi(); }
    }
    if (e.key === 'Escape') closeAi();
  });

  for (var i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function () {
      var q = this.getAttribute('data-q');
      if (q) window.open('https://www.google.com/search?q=' + encodeURIComponent(q), '_blank');
      closeAi();
    });
  }
}

function closeAi() {
  var m = document.getElementById('ai-modal');
  if (m) m.classList.remove('open');
}

/* ── Shortcuts ── */
function renderShortcuts() {
  var grid = document.getElementById('sc-grid');
  if (!grid) return;

  var html = '';
  for (var i = 0; i < SHORTCUTS.length; i++) {
    var s = SHORTCUTS[i];
    var domain = s.url.replace('https://','').replace('http://','').split('/')[0];
    var fav = FAV_BASE + domain + '&sz=64';
    html += '<a class="sc" href="' + s.url + '" target="_blank">' +
      '<div class="sc-icon">' +
        '<img src="' + fav + '" alt="' + esc(s.label) + '" ' +
          'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'" />' +
        '<div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;' +
          'background:' + s.color + ';color:#fff;font-size:11px;font-weight:700;letter-spacing:0.5px;">' +
          esc(s.ico) +
        '</div>' +
      '</div>' +
      '<span class="sc-label">' + esc(s.label) + '</span>' +
    '</a>';
  }

  // Add shortcut button
  html += '<div class="sc sc-add" id="btn-add-sc">' +
    '<div class="sc-icon"><span class="sc-plus">+</span></div>' +
    '<span class="sc-label">Add Shortcut</span>' +
  '</div>';

  grid.innerHTML = html;
}

/* ── Form ── */
function initForm() {
  wire('btn-open-form', openForm);
  wire('btn-cancel',    closeForm);
  wire('btn-save',      addReminder);

  var fTitle = document.getElementById('f-title');
  var fUrl   = document.getElementById('f-url');
  if (fTitle) fTitle.addEventListener('keydown', function (e) { if (e.key==='Enter') addReminder(); });
  if (fUrl)   fUrl.addEventListener('keydown',   function (e) { if (e.key==='Enter') addReminder(); });
}

function openForm() {
  var f = document.getElementById('add-form');
  if (!f) return;
  f.classList.add('open');
  setTimeout(function () {
    var t = document.getElementById('f-title'); if (t) t.focus();
  }, 60);
}

function closeForm() {
  var f = document.getElementById('add-form');
  if (f) f.classList.remove('open');
}

function addReminder() {
  var tEl = document.getElementById('f-title');
  var uEl = document.getElementById('f-url');
  var gEl = document.getElementById('f-tag');

  var title = tEl ? tEl.value.trim() : '';
  if (!title) {
    if (tEl) { tEl.classList.add('err'); tEl.focus(); setTimeout(function(){ tEl.classList.remove('err'); }, 1400); }
    return;
  }

  var url = uEl ? uEl.value.trim() : '';
  if (url && !url.startsWith('http')) url = 'https://' + url;

  var tagRaw = gEl ? gEl.value : '';
  var tagParts = tagRaw ? tagRaw.split('|') : [];
  var tagLabel = tagParts[0] || '';
  var tagColor = tagParts[1] || '#5f6368';

  reminders.unshift({
    id: String(Date.now()),
    title: title, url: url,
    tagLabel: tagLabel, tagColor: tagColor,
    done: false, createdAt: new Date().toISOString()
  });

  save(); renderAll(); closeForm();
  if (tEl) tEl.value = '';
  if (uEl) uEl.value = '';
  if (gEl) gEl.value = '';
}

/* ── Storage ── */
function loadAndRender() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get([STORE], function (res) {
      reminders = (res && res[STORE]) ? res[STORE] : [];
      renderAll();
    });
  } else {
    try { reminders = JSON.parse(localStorage.getItem(STORE) || '[]'); } catch(e) { reminders = []; }
    renderAll();
  }
}

function save() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    var o = {}; o[STORE] = reminders; chrome.storage.local.set(o);
  } else {
    try { localStorage.setItem(STORE, JSON.stringify(reminders)); } catch(e){}
  }
}

/* ── Render ── */
function renderAll() {
  var list  = document.getElementById('r-list');
  var empty = document.getElementById('empty');
  var badge = document.getElementById('badge');

  var pending = reminders.filter(function(r){ return !r.done; });
  var done    = reminders.filter(function(r){ return r.done; });

  if (badge) {
    if (pending.length > 0) { badge.classList.add('on'); badge.textContent = pending.length; }
    else                    { badge.classList.remove('on'); }
  }

  if (reminders.length === 0) {
    if (list)  list.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  var sorted = pending.concat(done);
  var html = '';
  for (var i = 0; i < sorted.length; i++) html += buildCard(sorted[i]);
  if (list) {
    list.innerHTML = html;
    var cards = list.querySelectorAll('.rcard');
    for (var j = 0; j < cards.length; j++) wireCard(cards[j]);
  }
}

function buildCard(r) {
  var cls = r.done ? 'done-c' : 'pending';

  var urlPart = '';
  if (r.url) {
    urlPart = '<a class="rurl" href="' + esc(r.url) + '" target="_blank">' + esc(shortUrl(r.url)) + '</a>';
  }

  var tagPart = '';
  if (r.tagLabel) {
    var bg = hexAlpha(r.tagColor, 0.12);
    tagPart = '<span class="rtag" style="background:' + bg + ';color:' + esc(r.tagColor) + ';border:1px solid ' + hexAlpha(r.tagColor, 0.25) + ';">' +
      '<span class="rtag-dot" style="background:' + esc(r.tagColor) + ';"></span>' +
      esc(r.tagLabel) +
    '</span>';
  }

  /* Action buttons — larger SVG icons */
  var goBtn = '';
  if (r.url) {
    goBtn = '<button class="raction-btn open-btn" data-action="go" data-url="' + esc(r.url) + '" ' +
            'data-tip="Open link" title="Open link">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none">' +
        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="#4285f4" stroke-width="2" stroke-linecap="round"/>' +
        '<polyline points="15 3 21 3 21 9" stroke="#4285f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<line x1="10" y1="14" x2="21" y2="3" stroke="#4285f4" stroke-width="2" stroke-linecap="round"/>' +
      '</svg>' +
    '</button>';
  }

  var doneLabel = r.done ? 'Reopen' : 'Done';
  var doneIcon  = r.done
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 14l-2-2-2 2 4 4 8-8-2-2z" stroke="#34a853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#34a853" stroke-width="1.5" fill="none"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#34a853" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var doneBtn = '<button class="raction-btn done-btn" data-action="toggle" data-tip="' + doneLabel + '" title="' + doneLabel + '">' +
    doneIcon +
  '</button>';

  var delBtn = '<button class="raction-btn del-btn" data-action="delete" data-tip="Remove" title="Remove">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none">' +
      '<line x1="18" y1="6" x2="6" y2="18" stroke="#ea4335" stroke-width="2.2" stroke-linecap="round"/>' +
      '<line x1="6" y1="6" x2="18" y2="18" stroke="#ea4335" stroke-width="2.2" stroke-linecap="round"/>' +
    '</svg>' +
  '</button>';

  return '<div class="rcard rcard-in ' + cls + '" data-id="' + esc(r.id) + '">' +
    '<div class="rbar"></div>' +
    '<div class="rdot-wrap"><div class="rdot"></div></div>' +
    '<div class="rbody">' +
      '<div class="rtitle">' + esc(r.title) + '</div>' +
      '<div class="rmeta">' + urlPart + tagPart + '</div>' +
    '</div>' +
    '<div class="ractions">' + goBtn + doneBtn + delBtn + '</div>' +
  '</div>';
}

function wireCard(card) {
  var id   = card.getAttribute('data-id');
  var btns = card.querySelectorAll('.raction-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (function(btn, el, cid) {
      return function(e) {
        e.stopPropagation();
        var act = btn.getAttribute('data-action');
        if (act === 'toggle') { toggleDone(cid); }
        else if (act === 'delete') {
          el.style.transition = 'opacity 0.18s, transform 0.18s';
          el.style.opacity = '0'; el.style.transform = 'scale(0.96) translateY(-4px)';
          setTimeout(function() {
            reminders = reminders.filter(function(r){ return r.id !== cid; });
            save(); renderAll();
          }, 200);
        } else if (act === 'go') {
          var u = btn.getAttribute('data-url');
          if (u) window.open(u, '_blank');
        }
      };
    })(btns[i], card, id));
  }
}

function toggleDone(id) {
  for (var i = 0; i < reminders.length; i++) {
    if (reminders[i].id === id) { reminders[i].done = !reminders[i].done; break; }
  }
  save(); renderAll();
}

/* ── Utils ── */
function wire(id, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('click', fn);
}

function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function shortUrl(url) {
  try {
    var u = new URL(url);
    var p = u.pathname !== '/' ? u.pathname.slice(0,14) + (u.pathname.length>14?'…':'') : '';
    return u.hostname.replace('www.','') + p;
  } catch(e) { return url.slice(0,26); }
}

function hexAlpha(hex, alpha) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  var r = parseInt(hex.slice(0,2),16);
  var g = parseInt(hex.slice(2,4),16);
  var b = parseInt(hex.slice(4,6),16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

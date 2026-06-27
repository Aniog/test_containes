// Strikingly Generators Hub — progressive enhancement only.
// All content is in the static HTML. This script adds: search filter,
// "Show all" toggles, and FAQ accordion. With JS off, everything stays
// visible and reachable.
(function () {
  'use strict';

  /* ---------- FAQ accordion ---------- */
  var faqButtons = document.querySelectorAll('.g-faq-btn');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.querySelector('.g-faq-icon').setAttribute('data-open', String(!isOpen));
      if (panel) panel.setAttribute('data-open', String(!isOpen));
    });
  });

  /* ---------- Show all toggles ----------
     Default (no JS): every card visible, toggle hidden.
     With JS: measure real card heights, collapse to show only the first
     `data-visible` cards, reveal the toggle. Clicking toggles between
     collapsed (first N) and expanded (all) using inline max-height so the
     CSS height transition animates without layout shift.
     Each toggle registers its apply() so the search filter can restore the
     collapsed state after clearing. */
  var toggleStates = {}; // panelId -> { apply, total, visibleN }
  var toggles = document.querySelectorAll('.g-show-toggle');
  toggles.forEach(function (toggle) {
    var panelId = toggle.getAttribute('aria-controls');
    var panel = document.getElementById(panelId);
    if (!panel) return;
    var grid = panel.querySelector('.g-grid-3');
    var cards = panel.querySelectorAll('.g-card-directory');
    var visibleN = parseInt(panel.getAttribute('data-visible') || '6', 10);
    var total = cards.length;
    if (total <= visibleN) return; // nothing to collapse

    var label = toggle.querySelector('.g-show-toggle-label');
    var collapsed = true;

    function measure() {
      var expandedH = grid.scrollHeight;
      var collapsedH = expandedH;
      if (cards[visibleN]) {
        var panelTop = panel.getBoundingClientRect().top;
        var hiddenTop = cards[visibleN].getBoundingClientRect().top;
        collapsedH = Math.ceil(hiddenTop - panelTop);
      }
      return { collapsedH: collapsedH, expandedH: expandedH };
    }

    function apply() {
      var m = measure();
      panel.style.maxHeight = (collapsed ? m.collapsedH : m.expandedH) + 'px';
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('data-collapsed', String(collapsed));
      if (label) {
        label.textContent = collapsed
          ? 'Show all ' + total + ' generators'
          : 'Show less';
      }
    }

    toggleStates[panelId] = { apply: apply, total: total, visibleN: visibleN };

    apply();
    toggle.hidden = false; // reveal toggle only after JS sets up collapse

    toggle.addEventListener('click', function () {
      collapsed = !collapsed;
      apply();
    });

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(apply, 150);
    });
  });

  /* ---------- Search filter ---------- */
  var input = document.getElementById('g-search');
  var countEl = document.getElementById('g-search-count');
  var emptyEl = document.getElementById('g-search-empty');
  var clearBtn = document.getElementById('g-search-clear');
  var directory = document.getElementById('g-directory');
  var subsections = directory
    ? Array.prototype.slice.call(directory.querySelectorAll('.g-subsection'))
    : [];

  function runSearch(rawQuery) {
    var query = rawQuery.trim().toLowerCase();
    var hasQuery = query.length > 0;

    if (!hasQuery) {
      // Restore default: show all cards, re-collapse subsections with toggles.
      subsections.forEach(function (sub) {
        sub.style.display = '';
        var panel = sub.querySelector('.g-subsection-grid-wrap');
        var toggle = sub.querySelector('.g-show-toggle');
        var cards = sub.querySelectorAll('.g-card-directory');
        cards.forEach(function (c) { c.style.display = ''; });
        if (toggle && panel) {
          toggle.style.display = '';
          var st = toggleStates[panel.id];
          if (st) {
            st.apply(); // re-measure and re-collapse to first N
          }
        }
      });
      if (countEl) countEl.hidden = true;
      if (emptyEl) emptyEl.hidden = true;
      return;
    }

    var totalMatches = 0;
    subsections.forEach(function (sub) {
      var cards = sub.querySelectorAll('.g-card-directory');
      var subMatches = 0;
      cards.forEach(function (card) {
        var name = card.getAttribute('data-gname') || '';
        var desc = card.getAttribute('data-gdesc') || '';
        var cat = card.getAttribute('data-gcat') || '';
        var hit =
          name.indexOf(query) !== -1 ||
          desc.indexOf(query) !== -1 ||
          cat.indexOf(query) !== -1;
        card.style.display = hit ? '' : 'none';
        if (hit) subMatches++;
      });
      totalMatches += subMatches;

      var panel = sub.querySelector('.g-subsection-grid-wrap');
      var toggle = sub.querySelector('.g-show-toggle');
      if (subMatches === 0) {
        sub.style.display = 'none';
      } else {
        sub.style.display = '';
        // While searching, expand panel fully and hide the toggle.
        if (panel) panel.style.maxHeight = 'none';
        if (toggle) toggle.style.display = 'none';
      }
    });

    if (countEl) {
      countEl.hidden = false;
      countEl.textContent =
        totalMatches + (totalMatches === 1 ? ' generator matches' : ' generators match');
    }
    if (emptyEl) emptyEl.hidden = totalMatches !== 0;
  }

  if (input) {
    input.addEventListener('input', function () {
      runSearch(input.value);
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      if (input) {
        input.value = '';
        runSearch('');
        input.focus();
      }
    });
  }
})();

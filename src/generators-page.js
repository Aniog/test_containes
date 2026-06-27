/* ===== /generators hub — progressive enhancement (vanilla JS) =====
 * Works on top of the statically-rendered HTML. With JS disabled, every
 * section, card, and link remains visible and reachable.
 */
(function () {
  'use strict';

  // ---- i18n-ready strings (single object; add strings.es / strings.ja later) ----
  var strings = {
    en: {
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      matchCount: function (n) { return n + (n === 1 ? ' generator matches' : ' generators match'); },
      showAll: function (n) { return 'Show all ' + n + ' generators'; },
      showLess: 'Show less',
      clearSearch: 'Clear search',
      cantFind: "Can't find it? Start with our AI builder."
    }
  };
  var t = strings.en;

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    initShowAll();
    initFaq();
    initSearch();
  });

  // ---------- "Show all" toggles (progressive collapse) ----------
  function initShowAll() {
    var groups = document.querySelectorAll('[data-gen-group]');
    groups.forEach(function (group) {
      var cards = Array.prototype.slice.call(group.querySelectorAll('[data-gen-card]'));
      var limit = parseInt(group.getAttribute('data-gen-limit') || '6', 10);
      if (cards.length <= limit) return; // nothing to collapse

      var extra = cards.slice(limit);
      // Wrap extras in a collapsible container.
      var wrapper = document.createElement('div');
      wrapper.className = 'gen-collapsible gen-collapsible-extra is-collapsed';
      wrapper.setAttribute('data-gen-collapsible', '');
      var parent = cards[limit].parentNode;
      parent.insertBefore(wrapper, cards[limit]);
      extra.forEach(function (c) { parent.removeChild(c); wrapper.appendChild(c); });

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gen-showall';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', '');
      btn.textContent = t.showAll(cards.length);
      parent.appendChild(btn);

      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          collapse(wrapper, btn, cards.length);
        } else {
          expand(wrapper, btn, cards.length);
        }
      });
    });
  }

  function expand(wrapper, btn, total) {
    wrapper.classList.remove('is-collapsed');
    wrapper.style.height = wrapper.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = t.showLess;
    var onEnd = function () {
      wrapper.style.height = 'auto';
      wrapper.removeEventListener('transitionend', onEnd);
    };
    wrapper.addEventListener('transitionend', onEnd);
  }
  function collapse(wrapper, btn, total) {
    wrapper.style.height = wrapper.scrollHeight + 'px';
    // force reflow
    void wrapper.offsetHeight;
    wrapper.style.height = '0px';
    wrapper.classList.add('is-collapsed');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = t.showAll(total);
  }

  // ---------- FAQ accordion ----------
  function initFaq() {
    var items = document.querySelectorAll('.gen-faq__item');
    items.forEach(function (item, idx) {
      var btn = item.querySelector('.gen-faq__btn');
      var panel = item.querySelector('.gen-faq__panel');
      if (!btn || !panel) return;
      var panelId = panel.getAttribute('id') || ('faq-panel-' + idx);
      panel.setAttribute('id', panelId);
      btn.setAttribute('aria-controls', panelId);

      // First item expanded by default; rest collapsed (JS enhancement).
      if (idx === 0) {
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.remove('is-collapsed');
      } else {
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.add('is-collapsed');
      }

      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.classList.toggle('is-collapsed', expanded);
      });
    });
  }

  // ---------- Search filter ----------
  function initSearch() {
    var input = document.getElementById('gen-search-input');
    var countEl = document.getElementById('gen-search-count');
    var emptyEl = document.getElementById('gen-empty');
    var clearBtn = document.getElementById('gen-clear-search');
    if (!input) return;

    var subsections = Array.prototype.slice.call(document.querySelectorAll('.gen-subsection'));
    var allCards = Array.prototype.slice.call(document.querySelectorAll('[data-gen-card]'));

    function norm(s) { return (s || '').trim().toLowerCase(); }

    function run(query) {
      var q = norm(query);
      if (!q) {
        // reset
        document.body.classList.remove('is-searching');
        allCards.forEach(function (c) { c.classList.remove('is-hidden'); });
        if (countEl) countEl.textContent = '';
        if (emptyEl) emptyEl.classList.remove('is-visible');
        return;
      }

      document.body.classList.add('is-searching');
      var totalMatches = 0;

      subsections.forEach(function (sub) {
        var cards = Array.prototype.slice.call(sub.querySelectorAll('[data-gen-card]'));
        var matches = 0;
        cards.forEach(function (card) {
          var name = norm(card.getAttribute('data-gen-name'));
          var desc = norm(card.getAttribute('data-gen-desc'));
          var cat = norm(card.getAttribute('data-gen-cat'));
          var hit = name.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || cat.indexOf(q) !== -1;
          card.classList.toggle('is-hidden', !hit);
          if (hit) matches++;
        });
        totalMatches += matches;
        sub.classList.toggle('has-match', matches > 0);
      });

      if (countEl) countEl.textContent = t.matchCount(totalMatches);
      if (emptyEl) emptyEl.classList.toggle('is-visible', totalMatches === 0);
    }

    var debounceTimer;
    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      var val = input.value;
      debounceTimer = setTimeout(function () { run(val); }, 120);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        run('');
        input.focus();
      });
    }
  }
})();

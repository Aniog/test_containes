// Client-side enhancements for the /generators hub page.
// Progressive enhancement: the page is fully usable without this script.
// What this script does:
//   1. Search filter — filters cards inside .strk-subsection blocks
//   2. Show all toggles — collapses cards past the visible threshold
//   3. FAQ accordions — keeps aria-expanded in sync with <details> state
//   4. Smooth-scroll for in-page anchor links (focus management for a11y)

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function normalize(str) {
    return (str || '').toString().toLowerCase().trim();
  }

  // ---- Search filter ----
  function initSearch() {
    const input = document.querySelector('[data-search-targets]');
    if (!input) return;
    const cardSelector = input.getAttribute('data-search-targets') || '.strk-gen-card';
    const scopeSelector = input.getAttribute('data-search-scope') || '.strk-subsection';
    const countSelector = input.getAttribute('data-search-result-count');
    const emptySelector = input.getAttribute('data-search-empty');
    const collapsedAttr = parseInt(input.getAttribute('data-search-collapsed-visible') || '0', 10);

    const scopes = Array.from(document.querySelectorAll(scopeSelector));
    const emptyEl = emptySelector ? document.querySelector(emptySelector) : null;
    const countEl = countSelector ? document.querySelector(countSelector) : null;

    function totalCards() {
      return Array.from(document.querySelectorAll(cardSelector));
    }

    function applyFilter(rawQuery) {
      const q = normalize(rawQuery);
      let total = 0;

      scopes.forEach((scope) => {
        const cards = Array.from(scope.querySelectorAll(cardSelector));
        let matched = 0;
        cards.forEach((card) => {
          const text = normalize(card.textContent);
          const isMatch = q === '' || text.indexOf(q) !== -1;
          // Toggle visibility via attribute; CSS handles display.
          if (isMatch) {
            card.removeAttribute('data-search-hidden');
            matched += 1;
          } else {
            card.setAttribute('data-search-hidden', 'true');
          }
        });

        // Show the subsection if it has any matches, or if no query.
        if (q === '' || matched > 0) {
          scope.removeAttribute('data-search-hidden');
        } else {
          scope.setAttribute('data-search-hidden', 'true');
        }

        total += matched;
      });

      if (countEl) {
        if (q === '') {
          countEl.textContent = `${totalCards().length} generators`;
        } else {
          countEl.textContent =
            total === 1
              ? `1 generator matches`
              : `${total} generators match`;
        }
      }
      if (emptyEl) {
        if (q !== '' && total === 0) {
          emptyEl.removeAttribute('hidden');
        } else {
          emptyEl.setAttribute('hidden', '');
        }
      }
    }

    input.addEventListener('input', function (e) {
      applyFilter(e.target.value);
    });

    // Hook up "Clear search" buttons.
    document.querySelectorAll('[data-clear-search]').forEach((btn) => {
      btn.addEventListener('click', function () {
        const sel = btn.getAttribute('data-clear-search');
        const target = sel ? document.querySelector(sel) : null;
        if (target) {
          target.value = '';
          applyFilter('');
          target.focus();
        }
      });
    });
  }

  // ---- Show all toggles for subsections ----
  function initShowAll() {
    const buttons = Array.from(document.querySelectorAll('[data-toggle-controls]'));
    buttons.forEach((btn) => {
      const gridId = btn.getAttribute('data-toggle-controls');
      const showLabel = btn.getAttribute('data-toggle-label-show') || btn.textContent;
      const hideLabel = btn.getAttribute('data-toggle-label-hide') || 'Show fewer';
      const visible = parseInt(btn.getAttribute('data-collapsed-visible') || '6', 10);
      const grid = document.getElementById(gridId);
      if (!grid) return;

      const cards = Array.from(grid.children);
      // Set initial collapsed state: keep first N visible, hide the rest.
      function setCollapsed(collapsed) {
        cards.forEach((card, i) => {
          if (i < visible) {
            card.removeAttribute('data-extra-hidden');
          } else {
            if (collapsed) {
              card.setAttribute('data-extra-hidden', 'true');
            } else {
              card.removeAttribute('data-extra-hidden');
            }
          }
        });
        btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        btn.textContent = collapsed ? showLabel : hideLabel;
      }

      setCollapsed(true);

      btn.addEventListener('click', function () {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        setCollapsed(expanded);
      });
    });
  }

  // ---- FAQ accordions: keep aria-expanded in sync ----
  function initFaq() {
    document.querySelectorAll('[data-faq-item]').forEach((item) => {
      const summary = item.querySelector('summary');
      if (!summary) return;
      function sync() {
        summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
      }
      sync();
      item.addEventListener('toggle', sync);
    });
  }

  // ---- Smooth-scroll for in-page hash links (without breaking default behavior) ----
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      link.addEventListener('click', function (e) {
        // Only smooth-scroll if the user agent is okay with scrolling and target is in-page.
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping.
        history.pushState(null, '', href);
        // Move keyboard focus to the target for screen readers, but only if it's focusable.
        if (target.hasAttribute('tabindex') === false) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      });
    });
  }

  ready(function () {
    initShowAll();
    initSearch();
    initFaq();
    initSmoothAnchors();
  });
})();

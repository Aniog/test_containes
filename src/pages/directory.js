// Vanilla JS for the directory: search filter and Show all toggles.
// All generators are already in the DOM from server render.
// This file only toggles visibility classes; never removes cards.

if (typeof window !== 'undefined') {
  window.__directoryLoaded = (window.__directoryLoaded || 0) + 1;
  console.log('[directory.js] module evaluated');
}

(function initDirectory() {
  if (typeof window === 'undefined') return;

  const ready = (fn) => {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  ready(() => {
    initSearch();
    initShowAll();
  });

  // Also re-bind after window load (post-React-hydration) so listeners survive
  // React hydration. Idempotent: re-binding with the same handler on the same
  // node is harmless.
  window.addEventListener('load', () => {
    initSearch();
    initShowAll();
  });

  function initSearch() {
    const input = document.querySelector('[data-directory-search]');
    if (!input) {
      console.warn('[directory.js] input[data-directory-search] NOT FOUND');
      return;
    }
    console.log('[directory.js] initSearch OK; cards=', document.querySelectorAll('[data-directory-card]').length);
    const cards = Array.from(document.querySelectorAll('[data-directory-card]'));
    const subsections = Array.from(document.querySelectorAll('[data-directory-subsection]'));
    const countEl = document.getElementById('directory-result-count');
    const emptyEl = document.getElementById('directory-empty-state');
    const clearBtn = document.querySelector('[data-clear-search]');

    const totalCount = cards.length;

    function applyQuery(rawQuery) {
      const q = (rawQuery || '').trim().toLowerCase();

      if (!q) {
        // Reset: show all cards, all subsections.
        for (const c of cards) {
          c.style.display = '';
        }
        for (const s of subsections) {
          s.style.display = '';
        }
        if (countEl) countEl.textContent = '';
        if (emptyEl) emptyEl.hidden = true;
        return;
      }

      let matches = 0;
      const subsectionMatchCount = new Map();
      for (const c of cards) {
        const name = c.getAttribute('data-name') || '';
        const description = c.getAttribute('data-description') || '';
        const category = c.getAttribute('data-category') || '';
        const hit = name.includes(q) || description.includes(q) || category.includes(q);
        c.style.display = hit ? '' : 'none';
        if (hit) {
          matches += 1;
          const subId = c.closest('[data-directory-subsection]')?.getAttribute('data-directory-subsection');
          if (subId) subsectionMatchCount.set(subId, (subsectionMatchCount.get(subId) || 0) + 1);
        }
      }

      for (const s of subsections) {
        const id = s.getAttribute('data-directory-subsection');
        const has = (subsectionMatchCount.get(id) || 0) > 0;
        s.style.display = has ? '' : 'none';
      }

      if (countEl) {
        countEl.textContent = matches === 1
          ? '1 generator matches "' + rawQuery.trim() + '"'
          : matches + ' generators match "' + rawQuery.trim() + '"';
      }
      if (emptyEl) emptyEl.hidden = matches > 0;
    }

    input.addEventListener('input', (e) => {
      applyQuery(e.target.value);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        applyQuery('');
        input.focus();
      });
    }

    // Initial count: hide count label if no query.
    if (countEl) countEl.textContent = '';
  }

  function initShowAll() {
    const buttons = document.querySelectorAll('[data-show-all]');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const subsectionId = btn.getAttribute('data-show-all');
        const subsection = document.getElementById(subsectionId);
        if (!subsection) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const next = !expanded;
        btn.setAttribute('aria-expanded', String(next));
        const overflowCards = subsection.querySelectorAll('[data-overflow="1"]');
        overflowCards.forEach((card) => {
          card.style.display = next ? '' : 'none';
        });
        // Update button label
        const total = subsection.querySelectorAll('[data-directory-card]').length;
        const labelEl = btn.querySelector('[data-show-all-label]');
        const toggleLabel = (next ? 'Show fewer' : 'Show all ' + total + ' generators');
        if (labelEl) labelEl.textContent = toggleLabel;
        else btn.textContent = toggleLabel;
      });
    });
  }
})();

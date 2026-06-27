// Vanilla JS for the FAQ accordion. First item starts expanded; others collapsed.

(function initFaq() {
  if (typeof window === 'undefined') return;

  const ready = (fn) => {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  ready(() => {
    const triggers = document.querySelectorAll('[data-faq-trigger]');
    triggers.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-faq-trigger');
        const panel = document.querySelector('[data-faq-panel="' + idx + '"]');
        const icon = document.querySelector('[data-faq-icon="' + idx + '"]');
        if (!panel) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const next = !expanded;
        btn.setAttribute('aria-expanded', String(next));
        panel.hidden = !next;
        if (icon) {
          icon.style.transform = next ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      });
    });
  });
})();

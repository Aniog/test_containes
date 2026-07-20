import { useEffect, useRef } from 'react';

// Adds .is-visible to a target element when it scrolls into view.
// We use a manual observer (no extra deps) for fine control.
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark for CSS so transition is wired
    el.classList.add('reveal');

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      {
        rootMargin: options.rootMargin || '0px 0px -80px 0px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return ref;
}

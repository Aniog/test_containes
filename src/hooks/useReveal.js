import { useEffect, useRef } from 'react';

/**
 * Subtle fade-up reveal when elements enter the viewport.
 * Attach to a container; every descendant with class `reveal` animates in
 * with a stagger based on document order. Runs once.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const targets = root.classList.contains('reveal')
      ? [root, ...root.querySelectorAll('.reveal')]
      : [...root.querySelectorAll('.reveal')];

    if (targets.length === 0) return undefined;

    targets.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 90, 450)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

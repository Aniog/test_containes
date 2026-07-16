import { useEffect, useRef, useCallback } from 'react';

export function useRevealOnScroll(options = {}) {
  const { threshold = 0.01, rootMargin = '100px 0px -50px 0px' } = options;
  const ref = useRef(null);

  const observe = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    return observe();
  }, [observe]);

  return ref;
}

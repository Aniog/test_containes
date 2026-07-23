import { useEffect, useRef, useState } from "react";

// Reveal-on-scroll: flips a visible flag once the element enters the viewport.
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}

export const revealBase =
  "transition-all duration-700 ease-luxe will-change-transform";
export const revealHidden = "opacity-0 translate-y-6";
export const revealShown = "opacity-100 translate-y-0";

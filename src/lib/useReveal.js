import { useEffect, useRef, useState } from "react";

// Add an `is-visible` class to a target the first time it intersects the
// viewport. Lightweight replacement for framer-motion. Single-shot.
export function useReveal({ rootMargin = "0px 0px -8% 0px", threshold = 0.05 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin, threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, visible };
}

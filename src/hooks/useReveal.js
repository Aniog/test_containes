import { useEffect, useRef } from "react";

/**
 * Adds `.is-visible` to children with the `.reveal` class when they enter the viewport.
 * Returns a ref to attach to the container; if `repeat` is true, animates in and out.
 */
export function useReveal({ threshold = 0.15, repeat = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const elements = root.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, repeat]);

  return ref;
}

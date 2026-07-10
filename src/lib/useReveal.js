import { useEffect, useRef } from "react";

/**
 * Lightweight reveal-on-scroll.
 *
 * Adds the `in` class to the ref'd element AND any descendant with the
 * `.reveal` base class, as each enters the viewport. Components can put
 * the ref on a section wrapper and stamp `.reveal` on the inner children
 * — the hook will observe all of them in one pass.
 */
export function useReveal({ rootMargin = "-10% 0px", once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = [node, ...Array.from(node.querySelectorAll(".reveal"))];

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("in");
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [rootMargin, once]);

  return ref;
}

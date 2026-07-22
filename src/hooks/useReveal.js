import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to a ref's children once they enter the viewport.
 * Used together with the `.reveal` class in index.css for soft fade-up reveals.
 */
export function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (typeof IntersectionObserver === "undefined") {
      // No IO support — show everything immediately.
      root.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    const targets = root.querySelectorAll(".reveal");
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [rootRef]);
}

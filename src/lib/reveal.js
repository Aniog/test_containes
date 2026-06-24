import { useEffect, useRef } from "react";

/**
 * IntersectionObserver-based scroll reveal.
 * Adds `is-visible` class to the ref'd element once it enters the viewport.
 * Re-runs the observer if `deps` change.
 */
export function useReveal({ threshold = 0.12, once = true, deps = [] } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return undefined;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export function formatPrice(value) {
  if (typeof value !== "number") return "";
  return `$${Math.round(value)}`;
}
import { useEffect, useRef } from "react";

// Adds `is-visible` class to `.reveal` elements when they enter the viewport.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current || document;
    const nodes = root.querySelectorAll(".reveal");
    if (!nodes.length) return;

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-visible"));
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return ref;
}

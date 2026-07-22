import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Page-level effects: load stock images into `data-strk-*` elements and
// reveal `.reveal` descendants on scroll. Re-runs when `deps` change so
// dynamically rendered content (filters, galleries, drawers) is handled.
export function usePageFx(deps = []) {
  const ref = useRef(null);

  // Stock images
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // Reveal on scroll
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const targets = root.querySelectorAll(".reveal");
    if (!targets.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return undefined;
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

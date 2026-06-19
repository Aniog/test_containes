import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Reveal — adds `is-in` to its container once it enters the viewport.
 * Used to fade-up content as the user scrolls. Pure CSS handles the transition.
 */
export default function Reveal({ children, as: As = "div", className, delay = 0, threshold = 0.15, once = true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <As
      ref={ref}
      className={cn("vm-reveal", inView && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </As>
  );
}

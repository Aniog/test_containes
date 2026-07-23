import React from "react";
import { useReveal, revealBase, revealHidden, revealShown } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

// Fade/slide-up reveal wrapper driven by IntersectionObserver.
export default function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(revealBase, visible ? revealShown : revealHidden, className)}
    >
      {children}
    </Tag>
  );
}

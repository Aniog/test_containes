import React from "react";
import { cn } from "@/lib/cn";

export default function Logo({ tone = "ink", size = "md", className }) {
  const colors = tone === "cream"
    ? "text-cream"
    : tone === "gold"
      ? "text-gold"
      : "text-ink";
  const sizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-5xl md:text-6xl",
  };
  return (
    <span
      className={cn(
        "vm-serif font-medium tracking-[0.32em] select-none",
        colors,
        sizes[size],
        className
      )}
      aria-label="Velmora"
    >
      VELMORA
    </span>
  );
}

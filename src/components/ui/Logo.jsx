import React from "react";
import { cn } from "@/lib/utils";

/**
 * Serif wordmark for VELMORA.
 * tone: "ivory" (on dark bg) or "ink" (on light bg)
 * size: "sm" | "md" | "lg"
 */
const Logo = ({ tone = "ink", size = "md", className }) => {
  const sizes = {
    sm: "text-lg tracking-[0.32em]",
    md: "text-xl tracking-[0.34em]",
    lg: "text-2xl tracking-[0.36em]",
  };
  return (
    <span
      className={cn(
        "font-serif font-medium",
        sizes[size],
        tone === "ivory" ? "text-ivory" : "text-ink",
        className
      )}
    >
      VELMORA
    </span>
  );
};

export default Logo;

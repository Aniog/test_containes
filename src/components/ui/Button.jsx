import React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-ink text-cream hover:bg-mocha border border-ink",
  accent:
    "bg-champagne text-cream hover:bg-mocha border border-champagne hover:border-mocha",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-ink hover:text-champagne border border-transparent",
  light:
    "bg-cream text-ink border border-ink hover:bg-ink hover:text-cream",
};

const SIZES = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5 text-xs",
  lg: "px-9 py-4 text-xs",
  block: "w-full px-7 py-4 text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  as: Comp = "button",
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-widest2 transition-all duration-300 ease-editorial select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

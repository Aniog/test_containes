import React from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid:
    "bg-ink text-cream hover:bg-gold-deep border border-ink hover:border-gold-deep",
  accent:
    "bg-gold text-cream hover:bg-gold-deep border border-gold hover:border-gold-deep",
  outline:
    "bg-transparent text-ink border border-ink/70 hover:border-gold hover:text-gold-deep",
  outlineLight:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-ink",
  ghost: "bg-transparent text-ink hover:text-gold-deep border border-transparent",
};

const sizes = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-8 py-3.5 text-xs",
  lg: "px-10 py-4 text-xs",
};

export default function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-widest2 rounded-sm transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

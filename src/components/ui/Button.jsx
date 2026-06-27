import React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-[var(--color-ink)] text-[var(--color-bone)] hover:bg-[var(--color-ink-soft)] border border-[var(--color-ink)]",
  accent:
    "bg-[var(--color-gold)] text-[var(--color-bone)] hover:bg-[var(--color-gold-deep)] border border-[var(--color-gold)]",
  outline:
    "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)]",
  outlineLight:
    "bg-transparent text-[var(--color-bone)] border border-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)]",
  ghost: "bg-transparent text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] border border-transparent",
  link: "bg-transparent text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] border border-transparent px-0 py-0 underline-offset-4",
};

const SIZES = {
  sm: "h-9 px-4 text-[0.7rem]",
  md: "h-11 px-6 text-[0.72rem]",
  lg: "h-14 px-9 text-[0.78rem]",
};

export function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  uppercase = true,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 select-none",
        "transition-all duration-300 ease-out",
        "font-medium",
        uppercase && "uppercase tracking-eyebrow",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Button;
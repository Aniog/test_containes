import React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-ink-950 text-textondark hover:bg-champagne-500 hover:text-ink-950 border border-ink-950 hover:border-champagne-500",
  accent:
    "bg-champagne-500 text-ink-950 hover:bg-champagne-600 border border-champagne-500 hover:border-champagne-600",
  outline:
    "bg-transparent text-ink-950 border border-ink-950 hover:bg-ink-950 hover:text-textondark",
  outlineLight:
    "bg-transparent text-textondark border border-textondark/80 hover:bg-textondark hover:text-ink-950",
  ghost: "bg-transparent text-ink-950 hover:text-champagne-600",
  ghostLight: "bg-transparent text-textondark hover:text-champagne-300",
};

const SIZES = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3 text-[11px]",
  lg: "px-9 py-3.5 text-[12px]",
  full: "w-full px-7 py-4 text-[12px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  as: Tag = "button",
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center font-sans uppercase tracking-widest2 font-medium editorial-transition disabled:opacity-50 disabled:cursor-not-allowed select-none",
        VARIANTS[variant] || VARIANTS.primary,
        SIZES[size] || SIZES.md,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

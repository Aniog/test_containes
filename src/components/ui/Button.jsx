import React from "react"
import { cn } from "@/lib/utils"

const variants = {
  // Solid dark premium CTA
  primary:
    "bg-ink text-bone border border-ink hover:bg-ink-soft hover:border-ink-soft",
  // Champagne gold accent (used sparingly on hero, key CTAs)
  gold:
    "bg-champagne text-ink border border-champagne hover:bg-champagne-deep hover:border-champagne-deep",
  // Outlined on light
  outline:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/[0.03]",
  // Outlined on dark
  outlineLight:
    "bg-transparent text-bone border border-bone/30 hover:border-bone hover:bg-bone/[0.05]",
  // Ghost (no border)
  ghost: "bg-transparent text-ink hover:text-champagne-deep",
}

const sizes = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5 text-[11px]",
  lg: "px-9 py-4 text-xs",
}

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  fullWidth = false,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "uppercase tracking-widest2 font-medium",
        "transition-all duration-300 ease-out-soft",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "rounded-[2px]",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

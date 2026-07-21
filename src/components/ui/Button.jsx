import React from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-gold text-cream hover:bg-gold-deep border border-transparent",
  dark:
    "bg-espresso text-cream hover:bg-ink border border-transparent",
  outline:
    "border border-ink/30 text-ink hover:border-gold hover:text-gold bg-transparent",
  outlineLight:
    "border border-cream/40 text-cream hover:border-gold hover:text-gold bg-transparent",
  ghost: "bg-transparent text-ink hover:text-gold border border-transparent",
}

const sizes = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-5 text-xs",
}

export default function Button({
  as: As = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}

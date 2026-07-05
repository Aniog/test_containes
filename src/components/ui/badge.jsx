import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-brand-gold text-white",
    secondary: "border-transparent bg-brand-warm text-brand-text",
    outline: "border border-brand-border text-brand-text",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-gold text-white",
    secondary: "bg-cream text-charcoal",
    outline: "border border-gold text-gold",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none px-2.5 py-0.5 text-xs font-sans font-medium tracking-cta uppercase transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }

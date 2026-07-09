import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-velmora-accent text-white",
    outline: "border-velmora-charcoal/20 text-velmora-charcoal bg-transparent",
    secondary: "border-transparent bg-velmora-stone text-velmora-charcoal",
  }
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }

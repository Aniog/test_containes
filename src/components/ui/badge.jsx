import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-gold text-white hover:bg-gold-dark",
    outline: "border-espresso text-espresso",
    secondary: "border-transparent bg-linen text-espresso",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 text-[10px] font-sans font-medium uppercase tracking-extra-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }

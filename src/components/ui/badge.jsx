import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = ({ className, children, variant = "default" }) => {
  const variants = {
    default: "bg-velmora-gold text-velmora-espresso",
    outline: "border border-velmora-border text-velmora-espresso",
    muted: "bg-velmora-stone text-velmora-espresso-light",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] font-sans font-medium uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

export { Badge }

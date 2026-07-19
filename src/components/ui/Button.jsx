import React from "react"
import { cn } from "@/lib/utils"

const styles = {
  primary:
    "bg-velmora-espresso text-velmora-ivory hover:bg-velmora-smoke border-velmora-espresso",
  accent:
    "bg-velmora-champagne text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-ivory border-velmora-champagne",
  outline:
    "bg-transparent text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-ivory border-velmora-espresso/30",
  ghost:
    "bg-transparent text-current hover:bg-current/10 border-transparent",
}

export default function Button({ as: Component = "button", variant = "primary", className, children, ...props }) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

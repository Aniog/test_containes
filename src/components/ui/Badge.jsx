import React from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  teal: "bg-teal-light text-teal",
  navy: "bg-navy/10 text-navy",
  warm: "bg-warm-200 text-ink-secondary",
  outline: "bg-transparent text-ink-secondary border border-warm-300",
}

const Badge = React.forwardRef(function Badge(
  { className, variant = "teal", children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 text-[12px] font-semibold tracking-wide",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
})

export default Badge

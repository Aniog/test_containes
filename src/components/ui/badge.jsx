import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "border-transparent bg-brand-600 text-white hover:bg-brand-700",
    secondary: "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200",
    outline: "border-slate-300 text-slate-700 hover:bg-slate-50",
    success: "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
  }
  return (
    <div
      ref={ref}
      className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors", variants[variant], className)}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

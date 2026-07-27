import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "border-transparent bg-brand text-white hover:bg-brand-light",
  secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "text-slate-700 border-slate-300",
  teal: "border-transparent bg-teal/10 text-teal hover:bg-teal/20",
}

function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }

import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[#2a2a3e] text-slate-300 border border-[#3a3a4e]",
    active: "bg-violet-600/20 text-violet-300 border border-violet-500/30",
    success: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    danger: "bg-red-500/20 text-red-300 border border-red-500/30",
    cyan: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  }
  return (
    <span ref={ref} className={cn("inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full", variants[variant], className)} {...props} />
  )
})
Badge.displayName = "Badge"

export { Badge }

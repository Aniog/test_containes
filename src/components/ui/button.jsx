import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20",
    secondary: "bg-[#1a1a2e] hover:bg-[#2a2a3e] text-slate-200 border border-[#2a2a3e]",
    ghost: "hover:bg-[#1a1a2e] text-slate-400 hover:text-slate-200",
    outline: "border border-[#2a2a3e] text-slate-300 hover:bg-[#1a1a2e] hover:text-slate-100",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    gradient: "bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white shadow-lg",
  }
  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
    icon: "p-2",
  }
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50",
    ghost: "text-slate-700 hover:bg-slate-100",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  }
  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-base",
    icon: "h-9 w-9",
  }
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

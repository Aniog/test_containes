import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-600",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-400",
    ghost: "hover:bg-slate-100 text-slate-700 focus-visible:ring-slate-400",
  }
  
  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    sm: "h-9 px-4 py-1.5 text-sm",
    lg: "h-12 px-8 py-3 text-base",
    xl: "h-14 px-10 py-4 text-lg",
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

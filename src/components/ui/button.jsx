import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
    accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white",
    ghost: "hover:bg-slate-100 text-slate-700",
    white: "bg-white text-brand-700 hover:bg-slate-50 shadow-sm border border-slate-200",
  }

  const sizes = {
    default: "h-11 px-6 py-2.5",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-8 text-lg",
    xl: "h-14 px-10 text-lg",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
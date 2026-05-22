import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-700 shadow",
    outline: "border border-red-600 text-red-600 bg-transparent hover:bg-red-50",
    ghost: "text-red-600 hover:bg-red-50",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 shadow",
    destructive: "bg-red-800 text-white hover:bg-red-900",
  }
  const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  }
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-50 disabled:pointer-events-none",
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

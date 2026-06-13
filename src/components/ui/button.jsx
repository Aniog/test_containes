import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#b8860b] text-white hover:bg-[#8b6914]",
    outline: "border border-[#1a1f2e] text-[#1a1f2e] hover:bg-[#1a1f2e] hover:text-white",
    ghost: "text-[#1a1f2e] hover:bg-[#e8e4de]"
  }
  
  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-base",
    sm: "h-9 px-4 py-1.5 text-xs"
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
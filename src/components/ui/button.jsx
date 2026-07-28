import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#0D9488] text-white hover:bg-[#0F766E]",
    secondary: "bg-[#0F2942] text-white hover:bg-[#1E3A5F]",
    outline: "border border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]",
    ghost: "text-[#475569] hover:bg-[#F8FAFC]"
  }
  
  const sizes = {
    default: "h-11 px-6 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-base",
    sm: "h-9 px-4 py-1.5 text-sm"
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
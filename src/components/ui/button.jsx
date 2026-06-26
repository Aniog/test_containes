import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#0A2540] text-white hover:bg-[#1E3A5F]",
    secondary: "bg-white text-[#0A2540] border border-[#CBD5E1] hover:bg-[#F8FAFC]",
    ghost: "text-[#0A2540] hover:bg-[#F1F5F9]",
    outline: "border border-[#CBD5E1] bg-transparent hover:bg-[#F8FAFC] text-[#0A2540]",
  }
  
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 px-4",
    lg: "h-14 px-8 text-base",
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

import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#0A2540] text-white hover:bg-[#1E3A5F]",
    outline: "border border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white",
    ghost: "hover:bg-[#F8FAFC] text-[#1E293B]",
    link: "text-[#0D9488] underline-offset-4 hover:underline"
  }
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10"
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
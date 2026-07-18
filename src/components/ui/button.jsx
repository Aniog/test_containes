import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#A68B5B] text-white hover:bg-[#8F7650] active:bg-[#7A6644]",
    outline: "border border-[#A68B5B] text-[#A68B5B] hover:bg-[#A68B5B] hover:text-white",
    ghost: "hover:bg-[#F5F2ED] text-[#2C2825]",
    link: "text-[#A68B5B] underline-offset-4 hover:underline"
  }
  
  const sizes = {
    default: "h-11 px-8 py-2",
    sm: "h-9 px-6 text-xs",
    lg: "h-12 px-10 text-base",
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

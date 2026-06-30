import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] shadow-sm",
  outline: "border border-[#1a1a1a] bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variantClasses = buttonVariants[variant] || buttonVariants.default
  const sizeClasses = size === "lg" ? "h-12 px-8 py-3" : size === "sm" ? "h-8 rounded-md px-3 text-xs" : "h-10 px-4 py-2"
  
  return React.createElement(
    "button",
    {
      className: cn(baseClasses, variantClasses, sizeClasses, className),
      ref,
      ...props,
    }
  )
})
Button.displayName = "Button"

export { Button }

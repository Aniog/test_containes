import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = ({ variant = 'default', size = 'default', className }) => {
  const base = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-[#1a1814] text-white hover:bg-[#2a2620] shadow-sm",
    outline: "border border-[#1a1814] text-[#1a1814] hover:bg-[#1a1814] hover:text-white",
    accent: "bg-[#c9a96e] text-white hover:bg-[#b89860] shadow-sm",
    ghost: "text-[#1a1814] hover:bg-[#1a1814]/5",
    link: "text-[#c9a96e] underline-offset-4 hover:underline"
  }
  
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10"
  }
  
  return cn(base, variants[variant], sizes[size], className)
}

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

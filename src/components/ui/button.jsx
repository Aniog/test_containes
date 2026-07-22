import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-gold text-white hover:bg-gold-hover",
    outline: "border border-gold text-gold hover:bg-gold hover:text-white bg-transparent",
    ghost: "text-charcoal hover:bg-cream",
    link: "text-gold underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-sans text-sm font-medium tracking-cta uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
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

import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-gold text-white hover:bg-gold-600 shadow-sm",
    outline: "border border-gold text-gold bg-transparent hover:bg-gold-50",
    ghost: "text-cream-700 hover:text-gold hover:bg-cream-100",
    link: "text-gold underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-12 px-8 py-3 text-sm uppercase tracking-wider font-medium",
    sm: "h-9 px-4 text-xs uppercase tracking-wider",
    lg: "h-14 px-10 py-4 text-sm uppercase tracking-wider font-medium",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
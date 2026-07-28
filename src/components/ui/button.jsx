import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-brand-teal text-white hover:bg-brand-tealDark",
    outline: "border border-brand-navy text-brand-navy hover:bg-slate-100",
    ghost: "hover:bg-slate-100 text-brand-navy",
    link: "text-brand-teal underline-offset-4 hover:underline",
  }
  
  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4",
    lg: "h-12 px-8 text-base",
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

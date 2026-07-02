import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-ultra-wide"
  
  const variants = {
    default: "bg-velmora-base text-white shadow hover:bg-velmora-base/90",
    outline: "border border-velmora-base bg-transparent shadow-sm hover:bg-velmora-base hover:text-white",
    secondary: "bg-velmora-grey text-white shadow-sm hover:bg-velmora-grey/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }
  
  const sizes = {
    default: "h-12 px-8 py-2",
    sm: "h-9 px-3",
    lg: "h-14 px-10",
    icon: "h-10 w-10",
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

import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const base =
    "inline-flex items-center justify-center font-sans text-xs font-medium uppercase tracking-extra-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-gold text-white hover:bg-gold-dark",
    outline: "border border-espresso text-espresso bg-transparent hover:bg-espresso hover:text-white",
    ghost: "text-espresso hover:bg-linen",
    link: "text-espresso underline-offset-4 hover:underline",
  }

  const sizes = {
    default: "h-11 px-8 py-3",
    sm: "h-9 px-6 py-2",
    lg: "h-12 px-10 py-4",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

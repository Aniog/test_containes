import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-velmora-charcoal text-white hover:bg-velmora-charcoal/90",
    outline: "border border-velmora-charcoal bg-transparent hover:bg-velmora-cream text-velmora-charcoal",
    ghost: "hover:bg-velmora-cream text-velmora-charcoal",
    gold: "bg-velmora-gold text-white hover:bg-velmora-gold/90",
  }
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 px-3",
    lg: "h-14 px-10 text-lg",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-none text-sm font-medium uppercase tracking-widest ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
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

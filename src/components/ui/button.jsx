import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-velmora-accent text-white hover:bg-velmora-accent/90",
      outline:
        "border border-velmora-charcoal text-velmora-charcoal bg-transparent hover:bg-velmora-charcoal hover:text-velmora-cream",
      ghost: "hover:bg-velmora-stone/30 text-velmora-charcoal",
      secondary: "bg-velmora-stone text-velmora-charcoal hover:bg-velmora-stone/80",
    }
    const sizes = {
      default: "h-11 px-6 py-2 text-sm tracking-wide",
      sm: "h-9 px-4 text-xs tracking-wide",
      lg: "h-12 px-8 text-base tracking-wide",
      icon: "h-10 w-10 p-2",
    }
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-accent disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }

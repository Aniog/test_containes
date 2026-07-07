import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(
  (
    { className, variant = "primary", size = "md", asChild = false, children, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-sans text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      primary:
        "bg-velmora-gold text-velmora-espresso hover:bg-velmora-gold-dark",
      secondary:
        "border border-velmora-espresso text-velmora-espresso bg-transparent hover:bg-velmora-espresso hover:text-white",
      ghost:
        "bg-transparent text-velmora-espresso hover:text-velmora-gold",
      outlineGold:
        "border border-velmora-gold text-velmora-gold bg-transparent hover:bg-velmora-gold hover:text-velmora-espresso",
    }

    const sizes = {
      sm: "h-9 px-4",
      md: "h-11 px-6",
      lg: "h-12 px-8",
      full: "h-12 w-full px-6",
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, children.props.className),
        ref,
        ...props,
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }

import * as React from "react"
import { tv } from "tailwind-variants"
import { cn } from "@/lib/utils"
import { Slot } from "./slot"

const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-velmora-gold disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-velmora-espresso text-velmora-cream shadow hover:bg-velmora-charcoal",
      accent:
        "bg-velmora-gold text-white shadow hover:bg-velmora-mocha",
      outline:
        "border border-velmora-espresso bg-transparent text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream",
      ghost:
        "hover:bg-velmora-sand text-velmora-espresso",
      link: "text-velmora-espresso underline-offset-4 hover:underline",
    },
    size: {
      default: "h-11 px-6 py-2",
      sm: "h-8 px-4 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

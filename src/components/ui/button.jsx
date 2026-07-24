import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-velmora-espresso text-velmora-cream shadow hover:bg-velmora-espresso-light",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-velmora-espresso bg-transparent shadow-sm hover:bg-velmora-espresso hover:text-velmora-cream",
        secondary:
          "bg-velmora-cream-dark text-velmora-espresso shadow-sm hover:bg-velmora-blush",
        ghost: "hover:bg-velmora-cream-dark hover:text-velmora-espresso",
        link: "text-velmora-espresso underline-offset-4 hover:underline",
        accent:
          "bg-velmora-gold text-velmora-espresso shadow hover:bg-velmora-gold-dark",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

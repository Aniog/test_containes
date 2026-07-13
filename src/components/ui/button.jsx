import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-velmora-accent text-velmora-cream shadow hover:bg-velmora-accent/90",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-600/90",
        outline: "border border-velmora-border bg-transparent shadow-sm hover:bg-velmora-cream hover:text-velmora-espresso",
        secondary: "bg-velmora-taupe text-velmora-cream shadow-sm hover:bg-velmora-taupe/80",
        ghost: "hover:bg-velmora-muted hover:text-velmora-espresso",
        link: "text-velmora-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
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
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }

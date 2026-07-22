import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-white hover:bg-gold-dark",
        outline: "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white",
        ghost: "bg-transparent text-charcoal hover:bg-cream-200",
        link: "text-charcoal underline-offset-4 hover:underline hover:text-gold",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2 text-xs",
        lg: "px-12 py-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

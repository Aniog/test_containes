import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-dark-900 text-cream-50 hover:bg-dark-800",
        accent: "bg-gold-500 text-dark-900 hover:bg-gold-400",
        outline: "border border-dark-900 text-dark-900 bg-transparent hover:bg-dark-900 hover:text-cream-50",
        ghost: "text-dark-700 hover:text-dark-900 hover:bg-dark-100",
        link: "text-dark-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3 tracking-widest uppercase text-xs",
        sm: "h-9 px-4 py-2 tracking-wide uppercase text-xs",
        lg: "h-14 px-10 py-4 tracking-widest uppercase text-sm",
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
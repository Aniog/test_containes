import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gold text-ink hover:bg-gold-soft",
        outline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-cream",
        "outline-light": "border border-cream/60 bg-transparent text-cream hover:border-gold hover:text-gold",
        "outline-gold": "border border-gold bg-transparent text-gold hover:bg-gold hover:text-ink",
        ghost: "text-ink hover:bg-sand",
        "ghost-light": "text-cream hover:bg-white/10",
        dark: "bg-ink text-cream hover:bg-espresso",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-14 px-10",
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

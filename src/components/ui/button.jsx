import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bronze text-ivory hover:bg-bronze-dark",
        ink: "bg-ink text-ivory hover:bg-espresso",
        outline: "border border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-ivory",
        "outline-light": "border border-ivory/40 bg-transparent text-ivory hover:bg-ivory hover:text-ink",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-ink underline-offset-4 hover:underline normal-case tracking-normal",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5",
        lg: "h-12 px-9",
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
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }

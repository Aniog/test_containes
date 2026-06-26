import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-500 text-slate-950 shadow hover:bg-cyan-400",
        destructive:
          "bg-red-600 text-slate-50 shadow-sm hover:bg-red-700",
        outline:
          "border border-slate-600 bg-transparent text-slate-100 shadow-sm hover:border-cyan-500 hover:text-cyan-400",
        secondary:
          "bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-700",
        ghost:
          "hover:bg-slate-800 hover:text-slate-100",
        link:
          "text-cyan-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
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

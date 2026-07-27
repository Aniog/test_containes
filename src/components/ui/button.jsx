import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-brand text-white hover:bg-brand-light",
      outline: "border border-brand bg-transparent text-brand hover:bg-brand hover:text-white",
      ghost: "hover:bg-slate-100 text-slate-700",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      link: "text-brand underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-5 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-lg px-8 text-base",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
}

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? React.Slot : "button"
  return (
    <Comp
      className={cn(
        buttonVariants.base,
        buttonVariants.variants.variant[variant || buttonVariants.defaultVariants.variant],
        buttonVariants.variants.size[size || buttonVariants.defaultVariants.size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

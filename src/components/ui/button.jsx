import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-white hover:bg-primary-dark": variant === "default",
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50": variant === "outline",
      "bg-orange-600 text-white hover:bg-orange-700": variant === "cta",
      "bg-secondary text-white hover:bg-secondary-dark": variant === "secondary",
      "bg-transparent text-primary hover:bg-primary-light": variant === "ghost",
      "h-9 px-4 py-2": size === "default",
      "h-11 px-6 py-3 text-base": size === "lg",
      "h-8 px-3 text-xs": size === "sm",
    },
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ref,
      ...props,
    })
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }

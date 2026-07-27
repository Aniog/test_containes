import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  ghost: "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background hover:text-primary focus:outline-none",
  link: "inline-flex items-center justify-center text-sm font-medium text-primary hover:text-primary-dark focus:outline-none",
}

const Button = React.forwardRef(({ className, variant = "primary", asChild = false, children, ...props }, ref) => {
  const classes = cn(buttonVariants[variant], className)

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

export { Button, buttonVariants }

import { cloneElement } from "react"
import { cn } from "@/lib/utils"

export function Button({
  children,
  variant = "primary",
  size = "md",
  asChild,
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary-light hover:text-primary-dark",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }
  const classes = cn(base, variants[variant], sizes[size], className)
  if (asChild && children) {
    return cloneElement(children, {
      className: cn(classes, children.props?.className),
      ...props,
    })
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

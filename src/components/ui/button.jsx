import * as React from "react"
import { cn } from "@/lib/utils"

function getVariantClasses(variant) {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-slate-100 text-slate-700",
    link: "text-blue-600 underline-offset-4 hover:underline",
  }
  return variants[variant] || variants.default
}

function getSizeClasses(size) {
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-11 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  }
  return sizes[size] || sizes.default
}

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const variantClasses = getVariantClasses(variant)
  const sizeClasses = getSizeClasses(size)
  const finalClassName = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses,
    sizeClasses,
    className
  )

  if (asChild && React.Children.only(props.children)) {
    return React.cloneElement(props.children, {
      className: cn(finalClassName, props.children.props?.className),
      ref,
    })
  }

  return React.createElement("button", { className: finalClassName, ref, ...props })
})
Button.displayName = "Button"

export { Button }
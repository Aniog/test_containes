import React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-sm",
    secondary: "bg-white text-brand-500 border border-brand-200 hover:bg-brand-50",
    accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
    ghost: "text-surface-600 hover:text-brand-500 hover:bg-surface-50",
    dark: "bg-brand-900 text-white hover:bg-brand-800",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    default: "px-6 py-3 text-base rounded-lg font-semibold",
    lg: "px-8 py-4 text-lg rounded-lg font-bold",
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
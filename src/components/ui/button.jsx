import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-brand-500 text-white hover:bg-brand-600 shadow-sm",
  accent: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
  outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white",
  ghost: "hover:bg-steel-100 text-steel-700",
  secondary: "bg-steel-100 text-steel-700 hover:bg-steel-200",
  link: "text-brand-500 underline-offset-4 hover:underline",
}

const buttonSizes = {
  default: "h-10 px-6 py-2",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-8 text-lg",
  icon: "h-10 w-10",
}

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

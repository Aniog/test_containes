import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700 shadow",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-600 bg-transparent text-gray-200 hover:bg-gray-700",
    secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    ghost: "bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white",
    link: "text-indigo-400 underline-offset-4 hover:underline bg-transparent",
  }
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  }
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50",
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

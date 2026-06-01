import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border-2 border-purple-400 bg-transparent text-purple-700 hover:bg-purple-50",
    secondary: "bg-amber-400 text-amber-900 hover:bg-amber-500 shadow-md",
    ghost: "hover:bg-purple-100 text-purple-700",
    link: "text-purple-600 underline-offset-4 hover:underline",
    magical: "bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 text-white hover:opacity-90 shadow-lg hover:shadow-xl",
  }
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
    xl: "h-14 px-10 text-lg",
    icon: "h-10 w-10",
  }
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

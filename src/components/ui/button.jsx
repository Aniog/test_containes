import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white/30 text-white hover:bg-white/10 bg-transparent",
    ghost: "hover:bg-white/10 text-white bg-transparent",
    secondary: "bg-white/10 text-white hover:bg-white/20",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    link: "text-white underline-offset-4 hover:underline bg-transparent",
  }
  const sizes = {
    default: "h-10 px-6 py-2 text-sm",
    sm: "h-8 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  }
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50",
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

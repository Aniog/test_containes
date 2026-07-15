import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-[#C9A96E] text-white hover:bg-[#b8975e]",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white",
    secondary: "bg-[#1C1C1C] text-white hover:bg-[#2a2a2a]",
    ghost: "hover:bg-[#F5F0EB] hover:text-[#1C1C1C]",
    link: "text-[#C9A96E] underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
  }
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

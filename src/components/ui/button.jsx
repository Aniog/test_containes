import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]",
    outline: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white",
    ghost: "hover:bg-[#f5f5f5] text-[#1a1a1a]",
    accent: "bg-[#c9a96e] text-white hover:bg-[#b89860]",
    accentOutline: "border border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white",
  },
  size: {
    default: "h-11 px-5 py-2",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10",
  },
}

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a96e] disabled:pointer-events-none disabled:opacity-50",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

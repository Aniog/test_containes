import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-indigo-600 text-white",
    secondary: "bg-gray-700 text-gray-200",
    destructive: "bg-red-600 text-white",
    outline: "border border-gray-600 text-gray-300",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-black",
    steam: "bg-[#1b2838] text-[#c7d5e0] border border-[#4c6b22]",
    epic: "bg-[#2d2d2d] text-white border border-gray-600",
    nintendo: "bg-red-600 text-white",
    playstation: "bg-blue-700 text-white",
    xbox: "bg-green-700 text-white",
  }
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

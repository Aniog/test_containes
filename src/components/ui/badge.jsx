import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-purple-100 text-purple-800 border-purple-200",
    secondary: "bg-amber-100 text-amber-800 border-amber-200",
    destructive: "bg-red-100 text-red-800 border-red-200",
    outline: "border-2 border-purple-300 text-purple-700 bg-transparent",
    success: "bg-green-100 text-green-800 border-green-200",
    magical: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200",
  }
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

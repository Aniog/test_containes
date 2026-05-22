import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-red-600 text-white",
    secondary: "bg-amber-100 text-amber-800",
    outline: "border border-red-600 text-red-600 bg-transparent",
    success: "bg-green-100 text-green-800",
  }
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

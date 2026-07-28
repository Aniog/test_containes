import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-primary-light text-primary-dark": variant === "default",
          "bg-secondary-light text-secondary-dark": variant === "secondary",
          "bg-gray-100 text-gray-700": variant === "outline",
          "bg-orange-100 text-orange-700": variant === "accent",
        },
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

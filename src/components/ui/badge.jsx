import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  variant: {
    default: "bg-[#1a1a1a] text-white",
    accent: "bg-[#c9a96e] text-white",
    outline: "border border-[#1a1a1a] text-[#1a1a1a]",
    soft: "bg-[#f5f5f5] text-[#1a1a1a]",
  },
}

const Badge = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          badgeVariants.variant[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }

import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "border-transparent bg-[#1a1a1a] text-white",
  secondary: "border-transparent bg-[#f5f5f5] text-[#1a1a1a]",
  outline: "text-[#1a1a1a]",
}

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return React.createElement(
    "div",
    {
      className: cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className
      ),
      ref,
      ...props,
    }
  )
})
Badge.displayName = "Badge"

export { Badge }

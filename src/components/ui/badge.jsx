import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary/10 text-primary border-transparent",
    secondary: "bg-secondary text-secondary-foreground border-transparent",
    destructive: "bg-destructive/10 text-destructive border-transparent",
    outline: "text-foreground border-border",
    success: "bg-emerald-100 text-emerald-700 border-transparent",
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

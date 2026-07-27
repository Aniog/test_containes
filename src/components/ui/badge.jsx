import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-background text-muted border-border",
  outline: "bg-transparent text-primary border-primary",
  accent: "bg-accent/10 text-accent-dark border-accent/20",
}

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
      badgeVariants[variant],
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export { Badge, badgeVariants }

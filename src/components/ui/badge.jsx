import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase",
  {
    variants: {
      variant: {
        default: "bg-cream-200 text-charcoal",
        gold: "bg-gold text-white",
        outline: "border border-taupe text-charcoal-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-velmora-espresso text-velmora-cream hover:bg-velmora-espresso-light",
        secondary:
          "border-transparent bg-velmora-cream-dark text-velmora-espresso hover:bg-velmora-blush",
        outline:
          "border-velmora-taupe/40 text-velmora-espresso hover:bg-velmora-cream-dark",
        accent:
          "border-transparent bg-velmora-gold text-velmora-espresso hover:bg-velmora-gold-dark",
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

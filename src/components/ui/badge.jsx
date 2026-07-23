import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-velmora-gold text-velmora-cream hover:bg-velmora-gold-light",
        secondary:
          "border-transparent bg-velmora-ivory text-velmora-charcoal hover:bg-velmora-border",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-velmora-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }

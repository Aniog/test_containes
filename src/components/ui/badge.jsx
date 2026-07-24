import { tv } from "tailwind-variants"
import { cn } from "@/lib/utils"

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-velmora-espresso text-velmora-cream hover:bg-velmora-charcoal",
      secondary:
        "border-transparent bg-velmora-sand text-velmora-espresso hover:bg-velmora-tan",
      outline:
        "border-velmora-espresso text-velmora-espresso",
      accent:
        "border-transparent bg-velmora-gold text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ rating = 5, size = 14, className }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const rounded = rating - full >= 0.75 ? full + 1 : full

  return (
    <div className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rounded
        const half = hasHalf && i === full
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              "transition-colors",
              filled || half ? "fill-gold-400 text-gold-400" : "fill-espresso-100 text-espresso-200"
            )}
          />
        )
      })}
    </div>
  )
}

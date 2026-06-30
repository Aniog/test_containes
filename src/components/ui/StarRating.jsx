import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ rating = 5, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const roundedFull = rating - full >= 0.75 ? full + 1 : full

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < roundedFull
          const half = hasHalf && i === full
          return (
            <Star
              key={i}
              size={size}
              className={cn(
                "transition-colors",
                filled || half ? "fill-gold text-gold" : "fill-stone text-stone"
              )}
            />
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-espresso/60">
          {rating.toFixed(1)}
          {typeof reviews === "number" && ` (${reviews})`}
        </span>
      )}
    </div>
  )
}

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ rating, count, size = 14, showCount = true, className }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.round(rating)
          return (
            <Star
              key={star}
              size={size}
              className={cn(
                "transition-colors",
                filled ? "fill-champagne text-champagne" : "text-linen"
              )}
            />
          )
        })}
      </div>
      {showCount && count != null && (
        <span className="text-xs text-taupe">({count})</span>
      )}
    </div>
  )
}

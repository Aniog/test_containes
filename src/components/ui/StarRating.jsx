import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ rating, count, showCount = true, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "fill-current",
              star <= Math.round(rating)
                ? "text-velmora-gold"
                : "text-velmora-stone"
            )}
            size={size}
          />
        ))}
      </div>
      {showCount && count != null && (
        <span className="text-xs text-velmora-mocha font-sans">
          ({count})
        </span>
      )}
    </div>
  )
}

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ rating, count, className }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-3.5 w-3.5",
              star <= Math.round(rating)
                ? "fill-velmora-gold text-velmora-gold"
                : "fill-transparent text-velmora-stone"
            )}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </div>
  )
}

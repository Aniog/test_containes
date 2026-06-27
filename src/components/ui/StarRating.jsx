import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ rating, size = 14, className }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => {
        const filled = i < fullStars || (i === fullStars && hasHalf)
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              "transition-colors",
              filled ? "fill-gold text-gold" : "fill-transparent text-warm-gray/40"
            )}
          />
        )
      })}
    </div>
  )
}

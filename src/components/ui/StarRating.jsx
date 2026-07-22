import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ rating = 5, size = 14, className }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          width={size}
          height={size}
          className={cn(
            n <= Math.round(rating) ? "fill-gold text-gold" : "fill-transparent text-sand"
          )}
        />
      ))}
    </div>
  )
}

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ rating = 5, size = 14, className }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i <= Math.round(rating) ? "fill-gold text-gold" : "fill-sand text-sand"
          )}
          style={{ width: size, height: size }}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

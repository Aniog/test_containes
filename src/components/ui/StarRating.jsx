import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ value = 5, size = 14, className }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.25 && value - full < 0.75
  const rounded = value - full >= 0.75 ? full + 1 : full
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rounded
        const half = hasHalf && i === rounded
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              "transition-colors",
              filled || half ? "fill-gold text-gold" : "fill-transparent text-line",
            )}
          />
        )
      })}
    </div>
  )
}

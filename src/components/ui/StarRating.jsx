import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({
  value = 0,
  size = 14,
  className,
  showValue = false,
  reviews,
}) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full
          const isHalf = !filled && i === full && half
          return (
            <Star
              key={i}
              width={size}
              height={size}
              className={cn(
                "text-gold",
                filled || isHalf ? "fill-gold" : "fill-transparent"
              )}
              strokeWidth={1.5}
            />
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-taupe">
          {value.toFixed(1)}
          {typeof reviews === "number" && (
            <span className="ml-1">({reviews})</span>
          )}
        </span>
      )}
    </div>
  )
}

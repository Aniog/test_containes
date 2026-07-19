import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({
  value = 5,
  size = 14,
  className,
  showValue = false,
}) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-gold-deep">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.25}
            className={cn(
              i < Math.round(value)
                ? "fill-gold-deep text-gold-deep"
                : "text-gold-soft",
            )}
          />
        ))}
      </div>
      {showValue ? (
        <span className="text-xs text-taupe">{value.toFixed(1)}</span>
      ) : null}
    </div>
  )
}

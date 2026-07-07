import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function RatingStars({ value = 0, count, className, size = 14 }) {
  const rounded = Math.round(value * 2) / 2
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center" aria-label={`Rated ${value} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = rounded >= i + 1
          const half   = !filled && rounded >= i + 0.5
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.2}
              className={cn(
                filled
                  ? "fill-gold-300 text-gold-300"
                  : half
                  ? "fill-gold-100 text-gold-300"
                  : "text-line"
              )}
            />
          )
        })}
      </div>
      {typeof count === "number" && (
        <span className="text-[11px] tracking-widest2 uppercase text-cocoa-50">
          ({count})
        </span>
      )}
    </div>
  )
}

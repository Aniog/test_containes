import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ value = 0, size = 14, className = "" }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  return (
    <div className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const half = i === full && hasHalf
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute inset-0 text-gold"
              strokeWidth={1.5}
              style={{ fill: filled || half ? "currentColor" : "none" }}
            />
            {half && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: size / 2 }}>
                <Star
                  size={size}
                  className="text-gold"
                  strokeWidth={1.5}
                  style={{ fill: "currentColor" }}
                />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

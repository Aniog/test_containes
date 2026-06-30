import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ value = 0, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full
          const isHalf = i === full && half
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star
                size={size}
                className="absolute inset-0 text-line"
                strokeWidth={1.5}
              />
              {(filled || isHalf) && (
                <Star
                  size={size}
                  className="absolute inset-0 text-gold fill-gold"
                  strokeWidth={1.5}
                  style={isHalf ? { clipPath: "inset(0 50% 0 0)" } : undefined}
                />
              )}
            </span>
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-stone">
          {value.toFixed(1)}
          {typeof reviews === "number" && ` (${reviews})`}
        </span>
      )}
    </div>
  )
}

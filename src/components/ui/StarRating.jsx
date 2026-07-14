import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ value = 5, size = 14, className, withText }) {
  const full = Math.floor(value)
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <span className="inline-flex items-center text-gold-400" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            className={i < full ? "fill-current" : "opacity-30"}
          />
        ))}
      </span>
      {withText && (
        <span className="ml-1.5 text-[12px] tracking-wider2 uppercase text-ink-200">
          {value.toFixed(1)} · {withText}
        </span>
      )}
    </div>
  )
}

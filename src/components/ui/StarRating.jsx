import React from "react"
import { Star } from "lucide-react"

export default function StarRating({ value = 5, size = 14, className = "", showCount = false, count }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} aria-label={`Rated ${value} out of 5`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            className={i < Math.round(value) ? "fill-gold text-gold" : "text-hairline"}
          />
        ))}
      </div>
      {showCount && count !== undefined ? (
        <span className="text-[11px] font-sans tracking-wide text-muted">({count})</span>
      ) : null}
    </div>
  )
}

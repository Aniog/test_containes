import { Star } from "lucide-react"

export default function StarRating({ value = 0, count, size = 14, className = "" }) {
  const filled = Math.round(value)
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-label={`Rated ${value} out of 5`}>
      <div className="flex items-center gap-0.5 text-gold-deep">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            className={i < filled ? "fill-gold text-gold-deep" : "text-hairline"}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="text-[11px] tracking-[0.12em] uppercase text-muted">
          {count}
        </span>
      )}
    </div>
  )
}
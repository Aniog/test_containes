import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ value = 5, count, size = 12, className = "" }) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 text-gold", className)}
      aria-label={`${value} out of 5 stars${count ? `, ${count} reviews` : ""}`}
    >
      <span className="inline-flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.4}
            className={i < Math.round(value) ? "fill-gold text-gold" : "text-line"}
          />
        ))}
      </span>
      {typeof count === "number" && count > 0 && (
        <span className="text-[0.7rem] text-muted tracking-wide">({count})</span>
      )}
    </span>
  )
}

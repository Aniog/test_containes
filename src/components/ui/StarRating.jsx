import { Star } from "lucide-react"

export default function StarRating({ value = 0, size = 14, className = "" }) {
  const stars = Array.from({ length: 5 })
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rated ${value} out of 5`}>
      {stars.map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={
            i < Math.round(value)
              ? "fill-gold text-gold"
              : "text-hairline"
          }
        />
      ))}
    </div>
  )
}

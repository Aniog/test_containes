import { Star } from "lucide-react"

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={
              star <= Math.round(rating)
                ? "fill-gold text-gold"
                : "fill-transparent text-stone"
            }
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-stone font-sans">({count})</span>
      )}
    </div>
  )
}

import { Star } from "lucide-react"

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={star <= Math.round(rating) ? "text-champagne fill-champagne" : "text-cream-muted"}
          size={size}
        />
      ))}
    </div>
  )
}

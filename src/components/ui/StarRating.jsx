import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-champagne text-champagne'
              : 'fill-none text-stone'
          }
          strokeWidth={1.5}
        />
      ))}
    </span>
  )
}

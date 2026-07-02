import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-champagne text-champagne'
              : 'text-hairline-dark'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

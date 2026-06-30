import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-velmora-star text-velmora-star'
              : 'fill-transparent text-velmora-hairline'
          }
        />
      ))}
    </div>
  )
}

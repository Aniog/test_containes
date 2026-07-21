import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating)
        return (
          <Star
            key={star}
            size={size}
            className={filled ? 'fill-gold text-gold' : 'fill-transparent text-warmgray-300'}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

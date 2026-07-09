import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating)
        return (
          <Star
            key={star}
            size={size}
            className={filled ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'text-hairline'
          }
        />
      ))}
    </div>
  )
}

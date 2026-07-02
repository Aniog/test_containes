import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating)
        return (
          <Star
            key={star}
            size={size}
            className={cn(
              'fill-current',
              filled ? 'text-gold' : 'text-cream-muted'
            )}
            aria-hidden="true"
          />
        )
      })}
    </span>
  )
}

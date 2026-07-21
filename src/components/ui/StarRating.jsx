import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating)
        return (
          <Star
            key={star}
            size={size}
            className={cn(
              'fill-current',
              filled ? 'text-gold' : 'text-champagne'
            )}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}

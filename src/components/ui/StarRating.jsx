import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, size = 14, showValue = true, reviewCount, className }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.round(rating)
          return (
            <Star
              key={star}
              size={size}
              className={cn(
                'fill-current',
                filled ? 'text-gold' : 'text-mist'
              )}
              strokeWidth={1.5}
            />
          )
        })}
      </div>
      {showValue && (
        <span className="text-sm text-taupe">
          {rating.toFixed(1)}
          {reviewCount ? ` (${reviewCount})` : ''}
        </span>
      )}
    </div>
  )
}

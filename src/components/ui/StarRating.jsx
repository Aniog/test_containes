import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, count, size = 14, className, showCount = true }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              'fill-current',
              star <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-sand'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-velmora-muted font-sans">({count})</span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, count, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'fill-current',
              star <= Math.round(rating) ? 'text-accent' : 'text-border'
            )}
            size={size}
          />
        ))}
      </div>
      {count != null && (
        <span className="text-xs text-muted-foreground">({count})</span>
      )}
    </div>
  )
}

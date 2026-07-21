import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating = 5, size = 14, className }) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            'transition-colors',
            i < Math.round(rating) ? 'fill-gold text-gold' : 'fill-transparent text-hairline',
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

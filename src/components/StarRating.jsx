import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(
            'fill-current',
            star <= Math.round(rating) ? 'text-accent' : 'text-muted'
          )}
        />
      ))}
    </div>
  )
}

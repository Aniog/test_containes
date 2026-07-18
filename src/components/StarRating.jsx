import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating = 5, size = 14, className = '' }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < Math.round(rating) ? 'fill-gold text-gold' : 'text-sand'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

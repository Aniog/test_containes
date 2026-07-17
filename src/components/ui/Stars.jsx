import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, size = 14, className }) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < Math.round(rating)
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={filled ? 'fill-gold text-gold' : 'fill-transparent text-sand'}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

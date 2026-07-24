import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, size = 14, className }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const isHalf = i === full && half
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              'text-gold',
              filled ? 'fill-gold' : isHalf ? 'fill-gold/50' : 'fill-none',
            )}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

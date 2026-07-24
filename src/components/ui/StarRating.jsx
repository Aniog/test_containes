import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className = '' }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const isHalf = !filled && half && i === full
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              'transition-colors',
              filled || isHalf ? 'fill-champagne text-champagne' : 'fill-transparent text-sand',
            )}
          />
        )
      })}
    </div>
  )
}

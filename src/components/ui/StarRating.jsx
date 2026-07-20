import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const isHalf = !filled && half && i === full
        return (
          <Star
            key={i}
            width={size}
            height={size}
            className={cn(
              'fill-current',
              filled || isHalf ? 'text-gold' : 'text-line'
            )}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}

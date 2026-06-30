import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating = 0, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75
  const roundedFull = rating - full >= 0.75 ? full + 1 : full

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < roundedFull
          const half = hasHalf && i === full
          return (
            <span key={i} className="relative" style={{ width: size, height: size }}>
              <Star
                size={size}
                className={cn(
                  'absolute inset-0',
                  filled || half ? 'text-champagne fill-champagne' : 'text-line fill-line',
                )}
                strokeWidth={1.5}
              />
            </span>
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-stone tracking-wide">
          {rating.toFixed(1)}
          {typeof reviews === 'number' && (
            <span className="ml-1">({reviews})</span>
          )}
        </span>
      )}
    </div>
  )
}

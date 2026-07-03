import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.25 && value - full < 0.75
  const rounded = value - full >= 0.75 ? full + 1 : full

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < rounded
          const half = hasHalf && i === full
          return (
            <Star
              key={i}
              size={size}
              className={cn(
                'transition-colors',
                filled || half ? 'fill-gold text-gold' : 'fill-transparent text-sand'
              )}
            />
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-muted">
          {value.toFixed(1)}
          {typeof reviews === 'number' && (
            <span className="ml-1">({reviews})</span>
          )}
        </span>
      )}
    </div>
  )
}

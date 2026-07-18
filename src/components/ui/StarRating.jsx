import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className = '', showValue = false, count }) {
  const full = Math.round(value)
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < full ? 'fill-gold text-gold' : 'text-hairline'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-stone tracking-wide">
          {value.toFixed(1)}
          {typeof count === 'number' && <span className="ml-1">({count})</span>}
        </span>
      )}
    </div>
  )
}

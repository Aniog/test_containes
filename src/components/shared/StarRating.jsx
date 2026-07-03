import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, count, className, size = 12 }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <div className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full
          const half = !filled && i === full && hasHalf
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star
                size={size}
                strokeWidth={1.2}
                className="text-gold-400 absolute inset-0"
              />
              {(filled || half) && (
                <Star
                  size={size}
                  strokeWidth={1.2}
                  className="text-gold-400 fill-gold-400 absolute inset-0"
                  style={half ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
                />
              )}
            </span>
          )
        })}
      </div>
      {typeof count === 'number' && (
        <span className="text-[12px] text-ink-500">({count})</span>
      )}
    </div>
  )
}

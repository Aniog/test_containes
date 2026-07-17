import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RatingStars({
  value = 0,
  count,
  size = 14,
  className = '',
  showCount = true,
}) {
  const safe = Math.max(0, Math.min(5, value))
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5" aria-label={`${safe} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.2}
            className={cn(
              i < Math.round(safe)
                ? 'fill-gold text-gold'
                : 'fill-transparent text-taupe'
            )}
          />
        ))}
      </div>
      {showCount && typeof count === 'number' && (
        <span className="text-[11px] tracking-widest2 text-espresso/60 font-light">
          ({count})
        </span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, count, size = 14, showValue = true }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              'transition-colors',
              i < fullStars || (i === fullStars && hasHalf)
                ? 'fill-accent text-accent'
                : 'fill-transparent text-warm-gray'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-warm-gray font-sans tracking-wide">
          {rating.toFixed(1)}
          {count !== undefined && ` (${count})`}
        </span>
      )}
    </div>
  )
}

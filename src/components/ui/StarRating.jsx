import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              'fill-current',
              i <= Math.round(rating)
                ? 'text-velmora-gold'
                : 'text-velmora-taupe',
            )}
          />
        ))}
      </div>
      {count != null && (
        <span className="ml-1 text-xs text-velmora-stone">({count})</span>
      )}
    </div>
  )
}

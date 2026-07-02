import { Star } from 'lucide-react'
import { cn } from '../lib/utils'

export function StarRating({ rating, count, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf)
          return (
            <Star
              key={i}
              size={size}
              className={cn(
                'transition-colors',
                filled ? 'fill-terracotta text-terracotta' : 'fill-transparent text-taupe'
              )}
            />
          )
        })}
      </div>
      {typeof count === 'number' && (
        <span className="text-xs text-taupe-dark font-sans">({count})</span>
      )}
    </div>
  )
}

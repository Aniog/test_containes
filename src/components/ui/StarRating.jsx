import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({
  rating = 5,
  size = 'sm',
  showValue = false,
  reviewCount,
  className,
}) {
  const dim = size === 'sm' ? 'h-3.5 w-3.5' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = i < Math.round(rating)
          return (
            <Star
              key={i}
              className={cn(dim, filled ? 'text-gold' : 'text-stone-deep/20')}
              strokeWidth={1.5}
              fill={filled ? 'currentColor' : 'none'}
            />
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-stone-muted">
          {rating.toFixed(1)}
          {typeof reviewCount === 'number' && (
            <span className="ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, count, size = 'sm', showCount = true, className }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= rating
                ? 'fill-gold-500 text-gold-500'
                : 'fill-charcoal-200 text-charcoal-200'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-charcoal-400 ml-1">({count})</span>
      )}
    </div>
  )
}

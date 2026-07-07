import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Stars({ rating, size = 14, className }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating)
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              'stroke-[1.5]',
              filled ? 'fill-[#B9975B] text-[#B9975B]' : 'fill-transparent text-[#E2DDD5]'
            )}
          />
        )
      })}
    </span>
  )
}

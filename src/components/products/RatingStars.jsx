import { Star } from 'lucide-react'
import { cn } from '@/lib/utils.js'

export default function RatingStars({
  className,
  rating,
  reviewCount,
}) {
  return (
    <div className={cn('flex items-center gap-2 text-sm text-stone-300', className)}>
      <div className="flex items-center gap-1 text-amber-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="font-medium text-stone-100">{rating.toFixed(1)}</span>
      {reviewCount ? <span>({reviewCount})</span> : null}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(
            'transition-colors',
            star <= Math.round(rating)
              ? 'fill-[#C49A6C] text-[#C49A6C]'
              : 'fill-transparent text-[#E4DDD4]'
          )}
        />
      ))}
    </div>
  )
}

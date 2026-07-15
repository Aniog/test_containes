import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RatingStars({ rating, reviewCount, light = false }) {
  const filledStars = Math.round(rating)

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4"
            fill={index < filledStars ? 'currentColor' : 'none'}
            strokeWidth={1.8}
          />
        ))}
      </div>
      <p
        className={cn(
          'text-sm',
          light ? 'text-velmora-ivory/80' : 'text-velmora-taupe',
        )}
      >
        {rating.toFixed(1)} · {reviewCount} reviews
      </p>
    </div>
  )
}

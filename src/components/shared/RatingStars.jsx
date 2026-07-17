import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function RatingStars({ rating, reviews, className = '' }) {
  return (
    <div className={cn('flex items-center gap-3 text-sm text-velmora-cocoa', className)}>
      <div className="flex items-center gap-1 text-velmora-champagne" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="font-medium text-velmora-cocoa">{rating.toFixed(1)}</span>
      {reviews ? <span className="text-velmora-truffle">({reviews} reviews)</span> : null}
    </div>
  )
}

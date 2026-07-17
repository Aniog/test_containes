import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

function RatingStars({ rating, reviews, light = false }) {
  return (
    <div className={cn('flex items-center gap-2 text-sm', light ? 'text-pearl' : 'text-smoke')}>
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium text-current">{rating.toFixed(1)}</span>
      <span>({reviews})</span>
    </div>
  )
}

export default RatingStars

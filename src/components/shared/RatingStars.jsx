import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const starArray = [0, 1, 2, 3, 4]

function RatingStars({ rating, reviewCount, className = '' }) {
  return (
    <div className={cn('flex items-center gap-2 text-sm text-velmora-espresso', className)}>
      <div className="flex items-center gap-1 text-velmora-champagne">
        {starArray.map((star) => (
          <Star key={star} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span className="text-velmora-aubergine/85">
        {rating.toFixed(1)}{reviewCount ? ` (${reviewCount})` : ''}
      </span>
    </div>
  )
}

export default RatingStars

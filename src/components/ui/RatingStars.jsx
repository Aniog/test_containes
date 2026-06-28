import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RatingStars({ rating, showValue = true, className }) {
  return (
    <div className={cn('flex items-center gap-2 text-sm text-velmora-taupe', className)}>
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      {showValue && <span>{rating.toFixed(1)}</span>}
    </div>
  )
}

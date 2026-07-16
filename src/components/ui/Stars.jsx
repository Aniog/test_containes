import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating, reviews, className = '', showText = true }) {
  const filledStars = Math.round(rating)

  return (
    <div className={cn('flex items-center gap-2 text-sm text-stone-600', className)}>
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              'h-4 w-4',
              index < filledStars ? 'fill-current' : 'text-stone-300',
            )}
          />
        ))}
      </div>
      {showText ? <span>{rating.toFixed(1)}</span> : null}
      {showText && typeof reviews === 'number' ? <span>({reviews})</span> : null}
    </div>
  )
}

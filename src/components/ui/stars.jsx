import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, className, starClassName }) {
  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          strokeWidth={1}
          className={cn(
            'h-3.5 w-3.5',
            i < Math.round(rating) ? 'fill-gold text-gold' : 'fill-line text-line',
            starClassName
          )}
        />
      ))}
    </div>
  )
}

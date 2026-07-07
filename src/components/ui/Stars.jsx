import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

function Stars({ rating, className = '' }) {
  return (
    <div className={cn('flex items-center gap-1 text-amber-500', className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn('h-4 w-4', index < Math.round(rating) ? 'fill-current' : 'fill-transparent')}
        />
      ))}
    </div>
  )
}

export default Stars

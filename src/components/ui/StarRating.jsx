import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating = 5, size = 'w-3.5 h-3.5', className }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(size, i < Math.round(rating) ? 'fill-gold text-gold' : 'text-sand')}
        />
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, size = 14, className }) {
  const full = Math.round(rating)
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < full ? 'fill-champagne text-champagne' : 'fill-line text-line'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, size = 14, className }) {
  return (
    <div className={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < Math.round(rating) ? 'fill-gold text-gold' : 'fill-none text-line'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

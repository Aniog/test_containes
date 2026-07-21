import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className }) {
  const full = Math.round(value)
  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < full ? 'fill-gold text-gold' : 'fill-none text-line'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ rating = 5, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i <= Math.round(rating)
              ? 'fill-velmora-gold text-velmora-gold'
              : 'fill-transparent text-velmora-border-dark'
          )}
        />
      ))}
    </div>
  )
}

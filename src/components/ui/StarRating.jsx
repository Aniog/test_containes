import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, count, size = 'sm', className = '' }) {
  const sizes = { xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-5 h-5' }
  
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= rating 
                ? 'fill-gold text-gold' 
                : star - 0.5 <= rating 
                  ? 'fill-gold/50 text-gold'
                  : 'fill-surface-200 text-surface-200'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-body-sm text-surface-500 ml-1">({count})</span>
      )}
    </div>
  )
}

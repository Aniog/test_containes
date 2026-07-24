import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Stars({ rating = 5, className, size = 'h-3.5 w-3.5' }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = rating >= i + 0.75
        const half = !filled && rating >= i + 0.25
        return (
          <span key={i} className="relative inline-flex">
            <Star className={cn(size, 'text-gold/35')} fill="currentColor" strokeWidth={0} />
            {(filled || half) && (
              <Star
                className={cn(size, 'absolute inset-0 text-gold')}
                fill="currentColor"
                strokeWidth={0}
                style={half ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
              />
            )}
          </span>
        )
      })}
    </span>
  )
}

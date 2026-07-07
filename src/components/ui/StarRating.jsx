import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ value = 0, count, className = '', size = 14, showCount = true }) {
  const rounded = Math.round(value)
  return (
    <div className={cn('inline-flex items-center gap-1.5', className)} aria-label={`${value} out of 5`}>
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              'transition-colors',
              i <= rounded ? 'fill-gold text-gold' : 'fill-transparent text-taupe',
            )}
            width={size}
            height={size}
            strokeWidth={1.25}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-[11px] font-sans tracking-wide text-mocha">({count})</span>
      )}
    </div>
  )
}

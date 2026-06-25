import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({ value = 5, size = 14, className = '' }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={cn('inline-flex items-center gap-[2px] text-gold', className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full
        const isHalf = i === full && half
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star size={size} className="absolute inset-0 text-sand" fill="currentColor" strokeWidth={0} />
            {(filled || isHalf) && (
              <Star
                size={size}
                className="absolute inset-0 text-gold"
                fill="currentColor"
                strokeWidth={0}
                style={isHalf ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
              />
            )}
          </span>
        )
      })}
    </div>
  )
}

export default StarRating

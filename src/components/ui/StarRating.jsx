import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ value = 5, size = 14, className, showValue = false }) {
  const full = Math.round(value)
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={cn(
              i < full ? 'fill-gold text-gold' : 'fill-transparent text-sand'
            )}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-stone tracking-wide">{value.toFixed(1)}</span>
      )}
    </div>
  )
}

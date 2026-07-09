import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, size = 14, showCount, count, className }) {
  const full = Math.floor(rating)
  const partial = rating - full

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          const isFull = i < full
          const isPartial = i === full && partial > 0

          return (
            <div key={i} className="relative">
              <Star
                size={size}
                className="text-border"
                fill="#E5DDD3"
                strokeWidth={0}
              />
              {(isFull || isPartial) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: isFull ? '100%' : `${partial * 100}%` }}
                >
                  <Star
                    size={size}
                    className="text-gold"
                    fill="#C9A96E"
                    strokeWidth={0}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-muted ml-1">({count})</span>
      )}
    </div>
  )
}

import React from 'react'
import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
        />
      ))}
    </span>
  )
}

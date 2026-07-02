import React from 'react'
import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-transparent text-cream-300'
          }
        />
      ))}
    </span>
  )
}

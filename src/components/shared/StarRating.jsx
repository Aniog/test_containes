import React from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={star <= Math.round(rating) ? 'fill-gold-500 text-gold-500' : 'text-cream-300'}
            size={size}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-warmgray-500">({count})</span>
      )}
    </div>
  )
}

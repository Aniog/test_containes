import React from 'react'
import { Star } from 'lucide-react'

export function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-400">{rating?.toFixed(1)}</span>
    </div>
  )
}

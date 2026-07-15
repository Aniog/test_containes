import React from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="stars flex items-center gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" />
      ))}
      {hasHalf && <Star size={size} fill="currentColor" className="opacity-50" />}
      {Array.from({ length: 5 - Math.ceil(rating) }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} />
      ))}
    </div>
  )
}

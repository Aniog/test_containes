import React from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="fill-[#A67C52] text-[#A67C52]" size={size} />
      ))}
      {hasHalf && (
        <Star className="fill-[#A67C52] text-[#A67C52] opacity-50" size={size} />
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="text-[#C5B8A8]" size={size} />
      ))}
    </div>
  )
}

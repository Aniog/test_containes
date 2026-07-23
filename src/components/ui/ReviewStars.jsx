import React from 'react'
import { Star } from 'lucide-react'

const ReviewStars = ({ rating, className = '' }) => (
  <div className={`flex items-center gap-1 ${className}`} aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-line'}`}
      />
    ))}
  </div>
)

export default ReviewStars

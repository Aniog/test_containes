import React from 'react'
import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                : 'text-[var(--velmora-border)]'
            }`}
          />
        ))}
      </div>
      {reviews && (
        <span className="text-xs text-[var(--velmora-text-muted)]">
          ({reviews})
        </span>
      )}
    </div>
  )
}

export default StarRating

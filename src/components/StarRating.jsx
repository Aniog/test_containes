import { Star } from 'lucide-react'

export const StarRating = ({ rating, size = 14 }) => {
  const full = Math.floor(rating)
  const partial = rating - full
  return (
    <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative">
          <Star size={size} className="text-border" fill="currentColor" />
          {i < full && (
            <Star
              size={size}
              className="absolute inset-0 text-[#C8A46E]"
              fill="currentColor"
            />
          )}
          {i === full && partial > 0 && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${partial * 100}%` }}
            >
              <Star
                size={size}
                className="text-[#C8A46E]"
                fill="currentColor"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'

const StarRating = ({ rating, reviewCount, light = false }) => {
  const starColor = light ? 'text-amber-300' : 'text-amber-700'
  const textColor = light ? 'text-stone-200' : 'text-stone-600'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 fill-current ${starColor}`}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className={`text-sm ${textColor}`}>
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default StarRating

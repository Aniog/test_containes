import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, light = false }) => {
  const textClass = light ? 'text-sand' : 'text-truffle'

  return (
    <div className={`flex items-center gap-2 text-xs ${textClass}`}>
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.2}
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default RatingStars

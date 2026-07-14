import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, light = false }) => {
  const starClassName = light ? 'text-velmora-gold' : 'text-velmora-gold'
  const textClassName = light ? 'text-velmora-cream/80' : 'text-velmora-muted'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 fill-current ${starClassName}`}
          />
        ))}
      </div>
      <span className={`text-sm ${textClassName}`}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default RatingStars

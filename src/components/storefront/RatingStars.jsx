import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, light = false }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating))

  return (
    <div className={`flex items-center gap-3 text-sm ${light ? 'text-pearl/90' : 'text-muted'}`}>
      <div className="flex items-center gap-1">
        {stars.map((filled, index) => (
          <Star
            key={`${rating}-${index}`}
            className={`h-4 w-4 ${filled ? 'fill-gold text-gold' : light ? 'text-pearl/40' : 'text-line'}`}
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default RatingStars

import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, light = false }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < Math.round(rating))

  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="flex items-center gap-1">
        {stars.map((filled, index) => (
          <Star
            key={`${rating}-${index}`}
            className={`h-4 w-4 ${
              filled
                ? 'fill-champagne text-champagne'
                : light
                  ? 'text-white/25'
                  : 'text-bone'
            }`}
          />
        ))}
      </div>
      <span className={light ? 'text-white/80' : 'text-truffle'}>
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default RatingStars

import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, light = false }) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        light ? 'text-velmora-ivory/85' : 'text-velmora-mocha'
      }`}
    >
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.5}
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

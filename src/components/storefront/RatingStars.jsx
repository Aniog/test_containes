import { Star } from 'lucide-react'

function RatingStars({ rating, reviews, light = false }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em]">
      <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-3.5 w-3.5 ${light ? 'fill-gold text-gold' : 'fill-gold text-gold'}`}
          />
        ))}
      </div>
      <span className={light ? 'text-pearl/80' : 'text-taupe'}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default RatingStars

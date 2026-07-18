import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, light = false }) => {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span className={light ? 'text-ivory/80' : 'text-ink/65'}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default RatingStars

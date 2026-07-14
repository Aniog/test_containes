import { Star } from 'lucide-react'

const Stars = ({ rating, reviews, compact = false }) => (
  <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} out of 5 stars`}>
    <div className="flex text-velmora-brass" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-current stroke-current`} />
      ))}
    </div>
    <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-velmora-smoke`}>
      {rating.toFixed(1)} · {reviews} reviews
    </span>
  </div>
)

export default Stars

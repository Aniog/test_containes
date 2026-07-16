import { Star } from 'lucide-react'

const StarRating = ({ rating = 5, count, compact = false }) => (
  <div className="flex items-center gap-2 text-velmora-espresso">
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-velmora-champagne text-velmora-champagne`}
          aria-hidden="true"
        />
      ))}
    </div>
    {count && (
      <span className="text-xs font-medium uppercase tracking-nav text-velmora-muted">
        {rating} ({count})
      </span>
    )}
  </div>
)

export default StarRating

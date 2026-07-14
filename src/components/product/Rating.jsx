import { Star } from 'lucide-react'

const Rating = ({ rating, reviews, compact = false }) => (
  <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} out of 5 stars`}>
    <div className="flex items-center gap-0.5 text-velmora-champagne">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-current`} strokeWidth={1.5} />
      ))}
    </div>
    <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-velmora-espresso/70`}>
      {rating} {reviews ? `(${reviews})` : ''}
    </span>
  </div>
)

export default Rating

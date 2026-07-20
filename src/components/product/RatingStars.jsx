import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-espresso">
      <div className="flex items-center gap-0.5 text-velmora-champagne" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
        ))}
      </div>
      <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-velmora-mocha`}>
        {rating.toFixed(1)} ({reviews})
      </span>
    </div>
  )
}

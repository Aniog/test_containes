import { Star } from 'lucide-react'

export default function Rating({ rating, reviews, className = '' }) {
  return (
    <div className={`flex items-center gap-2 text-velmora-espresso ${className}`}>
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne"
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-xs font-medium tracking-wide text-velmora-umber">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

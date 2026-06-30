import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} stars from ${reviews} reviews`}>
      <div className="flex items-center gap-0.5 text-velmora-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-current`} strokeWidth={1.5} />
        ))}
      </div>
      <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-velmora-taupe`}>
        {rating.toFixed(1)} ({reviews})
      </span>
    </div>
  )
}

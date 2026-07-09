import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink">
      <div className="flex items-center gap-0.5 text-velmora-gold" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-velmora-cocoa`}>
        {rating.toFixed(1)} {reviews ? `(${reviews})` : ''}
      </span>
    </div>
  )
}

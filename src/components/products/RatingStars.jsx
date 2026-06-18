import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} out of 5 stars`}>
      <div className="flex items-center gap-0.5 text-velmora-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.4} />
        ))}
      </div>
      {!compact && (
        <span className="text-xs font-medium text-velmora-cocoa/80">
          {rating.toFixed(1)} · {reviews} reviews
        </span>
      )}
    </div>
  )
}

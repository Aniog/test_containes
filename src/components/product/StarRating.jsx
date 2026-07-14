import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} out of 5 stars`}>
      <div className="flex gap-0.5 text-velmora-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.4} />
        ))}
      </div>
      {!compact && <span className="text-sm text-velmora-sage">{rating} · {reviews} reviews</span>}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-espresso">
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold"
            aria-hidden="true"
          />
        ))}
      </div>
      {!compact && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">
          {rating} · {reviews} reviews
        </span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function Rating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} stars`}>
      <div className="flex items-center gap-0.5 text-velmora-antique">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
        ))}
      </div>
      {!compact && (
        <span className="text-xs font-semibold uppercase tracking-luxury text-velmora-stone">
          {rating.toFixed(1)} · {reviews} reviews
        </span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function Stars({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-espresso">
      <div className="flex items-center gap-0.5 text-velmora-champagne" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.4} />
        ))}
      </div>
      {!compact && (
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-velmora-cocoa">
          {rating} · {reviews} reviews
        </span>
      )}
    </div>
  )
}

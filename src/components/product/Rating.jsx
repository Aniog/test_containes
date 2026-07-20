import { Star } from 'lucide-react'

export default function Rating({ rating, reviewCount, className = '' }) {
  return (
    <div className={`flex items-center gap-2 text-velmora-ink ${className}`}>
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-velmora-champagne text-velmora-champagne"
            strokeWidth={1.5}
          />
        ))}
      </div>
      {reviewCount ? (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">
          {rating.toFixed(1)} · {reviewCount} reviews
        </span>
      ) : null}
    </div>
  )
}

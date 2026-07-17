import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, reviewCount, className = '' }) {
  return (
    <div className={`flex items-center gap-3 text-sm text-mocha ${className}`}>
      <div className="flex items-center gap-1 text-gold" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((star) => (
          <Star key={star} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-ink">{rating.toFixed(1)}</span>
      {reviewCount ? <span>({reviewCount} reviews)</span> : null}
    </div>
  )
}

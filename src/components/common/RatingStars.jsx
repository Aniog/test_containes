import { Star } from 'lucide-react'

export default function RatingStars({ rating = 5, reviews }) {
  return (
    <div className="flex items-center gap-3 text-sm text-ink/75">
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`star-${index}`}
            className={`h-4 w-4 ${
              index < Math.round(rating) ? 'fill-current' : 'fill-transparent'
            }`}
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

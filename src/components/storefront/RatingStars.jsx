import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2 text-velmora-espresso">
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-velmora-champagne text-velmora-champagne"
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-velmora-taupe">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

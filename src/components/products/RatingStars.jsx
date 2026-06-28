import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, inverted = false }) {
  const textClass = inverted ? 'text-stone-100' : 'text-stone-600'

  return (
    <div className={`flex items-center gap-2 text-xs ${textClass}`}>
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
          />
        ))}
      </div>
      <span className="tracking-[0.18em] uppercase">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

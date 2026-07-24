import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-xs tracking-[0.24em] ${light ? 'text-cream/80' : 'text-ink/70'}`}>
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviews} REVIEWS
      </span>
    </div>
  )
}

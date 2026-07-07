import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-luxe text-velmora-espresso/70">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold"
          />
        ))}
      </div>
      <span className={light ? 'text-velmora-mist' : 'text-velmora-espresso/70'}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

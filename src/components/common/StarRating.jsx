import { Star } from 'lucide-react'

const StarRating = ({ rating, reviewCount, light = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4"
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className={light ? 'text-sm text-velmora-pearl/80' : 'text-sm text-velmora-ink/70'}>
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default StarRating

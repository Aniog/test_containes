import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => (
  <div className={`flex items-center gap-2 text-sm ${light ? 'text-velmora-cream' : 'text-velmora-muted'}`}>
    <div className="flex items-center gap-1 text-velmora-gold">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current"
          strokeWidth={1.5}
        />
      ))}
    </div>
    <span className={light ? 'text-velmora-cream/85' : 'text-velmora-muted'}>
      {rating.toFixed(1)} · {reviews} reviews
    </span>
  </div>
)

export default StarRating

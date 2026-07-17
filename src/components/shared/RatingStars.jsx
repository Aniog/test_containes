import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, light = false }) => (
  <div className={`flex items-center gap-2 text-sm ${light ? 'text-cream-100' : 'text-velvet-700'}`}>
    <div className="flex items-center gap-1 text-gold-500" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current"
          strokeWidth={1.5}
        />
      ))}
    </div>
    <span className="font-medium text-current">{rating.toFixed(1)}</span>
    <span className={light ? 'text-cream-200/80' : 'text-velvet-700/80'}>
      ({reviews})
    </span>
  </div>
)

export default RatingStars

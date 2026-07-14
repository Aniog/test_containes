import { Star } from 'lucide-react'

const StarRating = ({ rating, reviewCount, light = false }) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        light ? 'text-velmora-ivory/90' : 'text-velmora-muted'
      }`}
    >
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`star-${index}`}
            className="h-4 w-4 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)}
        {reviewCount ? ` · ${reviewCount} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

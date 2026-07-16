import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  return (
    <div className={`flex items-center gap-2 ${light ? 'text-ivory' : 'text-ink'}`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 fill-current ${light ? 'text-bronze' : 'text-bronze'}`}
          />
        ))}
      </div>
      <span className={`text-sm ${light ? 'text-ivory/80' : 'text-muted'}`}>
        {rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

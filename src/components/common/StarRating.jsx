import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, compact = false }) => {
  return (
    <div className={`flex items-center gap-2 ${compact ? 'text-xs' : 'text-sm'}`}>
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-velmora-mist">
        {rating.toFixed(1)}
        {reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

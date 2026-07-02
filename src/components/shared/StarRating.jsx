import { Star } from 'lucide-react'

const StarRating = ({ rating = 5, reviews, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 text-sm text-velmora-muted ${className}`}>
      <div className="flex items-center gap-1 text-velmora-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span className="text-xs uppercase tracking-[0.24em] text-velmora-muted/90">
        {rating.toFixed(1)}
        {reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

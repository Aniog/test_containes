import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, inverted = false }) => {
  const textClassName = inverted ? 'text-velmora-cream/80' : 'text-velmora-muted'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className={`text-sm ${textClassName}`}>
        {rating.toFixed(1)} {reviews ? <span>({reviews})</span> : null}
      </p>
    </div>
  )
}

export default RatingStars

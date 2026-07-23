import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-taupe">
      <div className="flex items-center gap-1 text-gold" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-ink">{rating.toFixed(1)}</span>
      <span>({reviews} reviews)</span>
    </div>
  )
}

export default RatingStars

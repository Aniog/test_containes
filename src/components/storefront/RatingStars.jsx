import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, compact = false }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index)

  return (
    <div
      className={`flex items-center gap-2 ${compact ? 'text-xs' : 'text-sm'} text-taupe`}
      aria-label={`${rating} out of 5 stars`}
    >
      <div className="flex items-center gap-1 text-champagne">
        {stars.map((star) => (
          <Star key={star} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-obsidian/80">{rating.toFixed(1)}</span>
      <span>({reviews})</span>
    </div>
  )
}

export default RatingStars

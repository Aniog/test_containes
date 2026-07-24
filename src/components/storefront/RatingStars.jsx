import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, centered = false }) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm text-velmora-smoke ${
        centered ? 'justify-center' : ''
      }`}
    >
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <span className="font-medium text-velmora-ink">{rating.toFixed(1)}</span>
      {reviews ? <span>({reviews} reviews)</span> : null}
    </div>
  )
}

export default RatingStars

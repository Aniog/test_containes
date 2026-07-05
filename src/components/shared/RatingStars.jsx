import { Star } from 'lucide-react'

function RatingStars({ rating = 5, reviews }) {
  return (
    <div className="flex items-center gap-3 text-sm text-velmora-taupe">
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < Math.round(rating) ? 'fill-current' : ''}`}
          />
        ))}
      </div>
      <span className="font-medium text-velmora-espresso">{rating.toFixed(1)}</span>
      {typeof reviews === 'number' && <span>({reviews} reviews)</span>}
    </div>
  )
}

export default RatingStars

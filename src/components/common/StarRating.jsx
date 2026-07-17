import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  const textColor = light ? 'text-velmora-ivory/80' : 'text-velmora-muted'

  return (
    <div className={`flex items-center gap-2 ${textColor}`}>
      <div className="flex items-center gap-1 text-velmora-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`star-${index}`}
            className="h-4 w-4 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-sm tracking-[0.12em]">
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default StarRating

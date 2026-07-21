import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  const textTone = light ? 'text-ivory/70' : 'text-taupe'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className={`text-sm ${textTone}`}>
        {rating.toFixed(1)}
        {reviews ? <span className="ml-2">({reviews} reviews)</span> : null}
      </p>
    </div>
  )
}

export default StarRating

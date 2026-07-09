import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  const tone = light ? 'text-ivory/80' : 'text-ink-soft'

  return (
    <div className={`flex items-center gap-3 text-sm ${tone}`}>
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium">
        {rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

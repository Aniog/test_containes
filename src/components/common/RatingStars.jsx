import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, light = false }) => {
  const starClassName = light ? 'text-amber-300' : 'text-amber-500'
  const textClassName = light ? 'text-stone-200' : 'text-stone-600'

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 fill-current ${starClassName}`}
          />
        ))}
      </div>
      <span className={textClassName}>
        {rating.toFixed(1)}
        {reviewCount ? ` · ${reviewCount} reviews` : ''}
      </span>
    </div>
  )
}

export default RatingStars

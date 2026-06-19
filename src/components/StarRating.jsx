import { Star } from 'lucide-react'

const StarRating = ({ rating, count, centered = false }) => {
  return (
    <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
      <div className="flex items-center gap-1 text-brand-bronze">
        {Array.from({ length: 5 }).map((_, index) => {
          const isFilled = index < Math.round(rating)
          return (
            <Star
              key={`star-${index}`}
              className={`h-4 w-4 ${isFilled ? 'fill-current' : ''}`}
            />
          )
        })}
      </div>
      <span className="text-sm text-brand-mink">
        {rating.toFixed(1)}{count ? ` · ${count} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  return (
    <div className={`flex items-center gap-2 ${light ? 'text-stone-50' : 'text-stone-900'}`}>
      <div className="flex items-center gap-1 text-amber-700">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.8}
          />
        ))}
      </div>
      <span className={`text-sm ${light ? 'text-stone-200' : 'text-stone-600'}`}>
        {rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

export default StarRating

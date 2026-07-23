import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, compact = false }) => {
  return (
    <div className="flex items-center gap-2 text-stone-600">
      <div className="flex items-center gap-1 text-amber-600">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`${rating}-${index}`}
            className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-current`}
          />
        ))}
      </div>
      <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium`}>
        {rating.toFixed(1)}{reviews ? ` (${reviews})` : ''}
      </span>
    </div>
  )
}

export default StarRating

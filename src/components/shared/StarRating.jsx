import { Star } from 'lucide-react'

const StarRating = ({ rating, reviewCount, light = false }) => {
  const textColor = light ? 'text-stone-200' : 'text-stone-600'

  return (
    <div className={`flex items-center gap-2 text-sm ${textColor}`}>
      <div className="flex items-center gap-1 text-brand-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium text-current">{rating.toFixed(1)}</span>
      {reviewCount ? <span>({reviewCount})</span> : null}
    </div>
  )
}

export default StarRating

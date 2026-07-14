import { Star } from 'lucide-react'

function StarRating({ rating, reviews, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${light ? 'text-stone-200' : 'text-stone-600'}`}>
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span>{rating.toFixed(1)} · {reviews} reviews</span>
    </div>
  )
}

export default StarRating

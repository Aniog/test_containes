import { Star } from 'lucide-react'

function StarRating({ rating, reviews, light = false }) {
  const tone = light ? 'text-stone-100' : 'text-stone-900'
  const muted = light ? 'text-stone-300' : 'text-stone-500'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className={`text-sm ${tone}`}>{rating.toFixed(1)}</span>
      {reviews ? <span className={`text-sm ${muted}`}>({reviews})</span> : null}
    </div>
  )
}

export default StarRating

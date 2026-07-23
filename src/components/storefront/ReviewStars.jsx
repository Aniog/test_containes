import { Star } from 'lucide-react'

export default function ReviewStars({ rating, reviews, light = false }) {
  const textClass = light ? 'text-white/80' : 'text-stone-600'
  const iconClass = light ? 'text-amber-500' : 'text-amber-500'

  return (
    <div className={`flex items-center gap-2 text-sm ${textClass}`}>
      <div className={`flex items-center gap-1 ${iconClass}`} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span>
        {rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}
      </span>
    </div>
  )
}

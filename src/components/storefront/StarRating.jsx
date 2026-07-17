import { Star } from 'lucide-react'

export function StarRating({ rating, reviews, light = false }) {
  const textColor = light ? 'text-velmora-ivory/80' : 'text-velmora-taupe'

  return (
    <div className={`flex items-center gap-2 text-sm ${textColor}`}>
      <div className="flex items-center gap-1 text-velmora-gold">
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

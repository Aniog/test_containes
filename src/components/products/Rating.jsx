import { Star } from 'lucide-react'

export default function Rating({ rating, reviews, light = false }) {
  const textColor = light ? 'text-velmora-ivory' : 'text-velmora-ink'

  return (
    <div className={`flex items-center gap-2 text-sm ${textColor}`}>
      <div className="flex text-velmora-champagne" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.4} />
        ))}
      </div>
      <span className={light ? 'text-velmora-ivory/85' : 'text-velmora-taupe'}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

import { Star } from 'lucide-react'

function StarRating({ rating, reviewCount, light = false }) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-3.5 w-3.5 ${
              light ? 'text-velmora-gold' : 'text-velmora-gold'
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      <span className={light ? 'text-velmora-cloud' : 'text-velmora-mist'}>
        {rating.toFixed(1)} · {reviewCount} Reviews
      </span>
    </div>
  )
}

export default StarRating

import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewCount, size = 14 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.round(rating)
          return (
            <Star
              key={star}
              size={size}
              className={filled ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-hairline'}
              strokeWidth={1.5}
            />
          )
        })}
      </div>
      {typeof reviewCount === 'number' && (
        <span className="text-xs text-velmora-ink-muted font-sans">
          ({reviewCount})
        </span>
      )}
    </div>
  )
}

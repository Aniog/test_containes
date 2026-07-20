import { Star } from 'lucide-react'

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={
              i <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-hairline'
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-muted">({count})</span>
      )}
    </div>
  )
}

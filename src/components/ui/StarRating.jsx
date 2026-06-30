import { Star } from 'lucide-react'

const GOLD = '#C9A96E'
const EMPTY = 'rgba(196,185,173,0.35)'

export function StarRating({ rating, count, size = 'sm' }) {
  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'
  const filled = Math.round(rating)
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className={starSize}
            style={{ fill: i <= filled ? GOLD : EMPTY, color: i <= filled ? GOLD : EMPTY }}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-driftwood font-sans">({count})</span>
      )}
    </div>
  )
}

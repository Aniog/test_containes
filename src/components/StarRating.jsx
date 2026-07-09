import { Star } from 'lucide-react'

export default function StarRating({ rating, count, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < fullStars || (i === fullStars && hasHalf)
          return (
            <Star
              key={i}
              size={size}
              className={isFilled ? 'fill-accent text-accent' : 'text-muted-subtle'}
              strokeWidth={1.5}
            />
          )
        })}
      </div>
      {typeof count === 'number' && (
        <span className="text-xs text-muted">({count})</span>
      )}
    </div>
  )
}

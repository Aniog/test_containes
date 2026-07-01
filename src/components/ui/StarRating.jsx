import { Star } from 'lucide-react'

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={
              star <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-border'
            }
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </div>
  )
}

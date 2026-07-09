import { Star } from 'lucide-react'

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-border-strong'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

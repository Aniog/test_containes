import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewsCount, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf)
          return (
            <Star
              key={i}
              size={size}
              className={filled ? 'fill-gold text-gold' : 'text-champagne'}
              strokeWidth={1.5}
            />
          )
        })}
      </div>
      {typeof reviewsCount === 'number' && (
        <span className="text-xs text-charcoal/70 font-sans">
          ({reviewsCount})
        </span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function StarRating({ rating, count, size = 14 }) {
  const fullStars = Math.floor(rating || 0)
  const hasHalf = (rating || 0) - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={`${
              i < fullStars || (i === fullStars && hasHalf)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-taupe-light'
            } ${i === fullStars && hasHalf ? 'half-star' : ''}`}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe-light font-sans">({count})</span>
      )}
    </div>
  )
}

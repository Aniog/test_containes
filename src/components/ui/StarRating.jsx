import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFilled = i < fullStars || (i === fullStars && hasHalf)
        return (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            className={`${
              isFilled ? 'fill-gold text-gold' : 'text-warm-gray'
            }`}
          />
        )
      })}
    </div>
  )
}

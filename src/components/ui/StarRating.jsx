import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating)
  const partial = rating - fullStars
  const stars = []

  for (let i = 0; i < 5; i++) {
    const fill = i < fullStars ? 1 : i === fullStars ? partial : 0
    stars.push(
      <span key={i} className="relative inline-block">
        <Star
          size={size}
          className="text-line"
          strokeWidth={1.5}
          fill="currentColor"
        />
        <span
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${fill * 100}%` }}
        >
          <Star
            size={size}
            className="text-gold"
            strokeWidth={1.5}
            fill="currentColor"
          />
        </span>
      </span>
    )
  }

  return <div className="flex items-center gap-0.5">{stars}</div>
}

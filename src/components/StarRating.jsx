import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <span className="inline-flex items-center" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`f-${i}`} size={size} className="fill-velmora-softgold text-velmora-softgold" />
      ))}
      {hasHalf && (
        <span className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} className="absolute text-velmora-stone" />
          <span className="absolute overflow-hidden" style={{ width: size / 2 }}>
            <Star size={size} className="fill-velmora-softgold text-velmora-softgold" />
          </span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`e-${i}`} size={size} className="text-velmora-stone" />
      ))}
    </span>
  )
}

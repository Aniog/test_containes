import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const empty = 5 - full - (hasHalf ? 1 : 0)

  return (
    <span className="inline-flex items-center" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={size} className="fill-velmora-accent text-velmora-accent" />
      ))}
      {hasHalf && (
        <span className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} className="absolute inset-0 text-stone-300" />
          <span className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={size} className="fill-velmora-accent text-velmora-accent" />
          </span>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} size={size} className="text-stone-300" />
      ))}
    </span>
  )
}

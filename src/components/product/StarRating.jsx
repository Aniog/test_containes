import { Star } from 'lucide-react'

export default function StarRating({ value = 5, size = 14, className = '' }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return 'full'
    if (i === full && hasHalf) return 'half'
    return 'empty'
  })
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5 stars`}>
      {stars.map((kind, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          strokeWidth={1}
          className={
            kind === 'empty'
              ? 'text-taupe/40'
              : 'fill-gold stroke-gold'
          }
        />
      ))}
    </div>
  )
}

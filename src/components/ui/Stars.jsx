import { Star } from 'lucide-react'

export default function Stars({ rating = 5, size = 'w-3.5 h-3.5', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-velmora-gold ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={size}
          strokeWidth={1.5}
          fill={i < Math.round(rating) ? 'currentColor' : 'none'}
        />
      ))}
    </span>
  )
}

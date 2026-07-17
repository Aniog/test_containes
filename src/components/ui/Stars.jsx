import { Star } from 'lucide-react'

export default function Stars({ rating = 5, className = '', size = 'h-3.5 w-3.5' }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${size} ${
            i <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-stone-warm text-stone-warm'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  )
}

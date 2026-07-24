import { Star } from 'lucide-react'

export default function Stars({ value = 5, className = 'h-3.5 w-3.5' }) {
  const full = Math.round(value)
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${
            i <= full ? 'fill-gold-soft text-gold-soft' : 'fill-sand-deep text-sand-deep'
          }`}
          strokeWidth={1}
        />
      ))}
    </span>
  )
}

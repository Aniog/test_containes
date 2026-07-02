import { Star } from 'lucide-react'

const StarRating = ({ rating = 5, reviews, className = '' }) => {
  const filledStars = Math.round(rating)

  return (
    <div className={`flex items-center gap-2 text-sm text-[var(--color-foreground)] ${className}`}>
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < filledStars
                ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                : 'text-[var(--color-border-strong)]'
            }`}
          />
        ))}
      </div>
      <span className="text-[var(--color-muted)]">
        {rating.toFixed(1)}{reviews ? ` (${reviews})` : ''}
      </span>
    </div>
  )
}

export default StarRating

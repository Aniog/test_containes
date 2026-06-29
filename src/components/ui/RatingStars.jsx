import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, centered = false }) => {
  const showMeta = typeof reviewCount === 'number' && reviewCount > 0

  return (
    <div
      className={`flex items-center gap-2 text-sm text-[var(--color-text-secondary)] ${centered ? 'justify-center' : ''}`}
    >
      <div className="flex items-center gap-1 text-[var(--color-accent)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      {showMeta && (
        <span>
          {rating.toFixed(1)} · {reviewCount} reviews
        </span>
      )}
    </div>
  )
}

export default RatingStars

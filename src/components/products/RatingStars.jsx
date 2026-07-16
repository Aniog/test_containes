import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, inverted = false }) => {
  const textColor = inverted ? 'text-surface' : 'text-ink'
  const mutedColor = inverted ? 'text-surface/70' : 'text-ink-muted'

  return (
    <div className={`flex items-center gap-2 text-sm ${textColor}`}>
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <span className="font-medium">{rating.toFixed(1)}</span>
      <span className={mutedColor}>({reviewCount})</span>
    </div>
  )
}

export default RatingStars

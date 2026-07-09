import { Star } from 'lucide-react'

function RatingStars({ rating, reviews, light = false }) {
  const textColor = light ? 'text-cream' : 'text-ink'
  const mutedColor = light ? 'text-cream/80' : 'text-muted'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span className={`text-sm ${textColor}`}>{rating.toFixed(1)}</span>
      {reviews ? <span className={`text-sm ${mutedColor}`}>({reviews})</span> : null}
    </div>
  )
}

export default RatingStars

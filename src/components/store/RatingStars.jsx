import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviews, light = false }) => {
  const textColor = light ? 'text-brand-ivory/90' : 'text-brand-ink'
  const mutedColor = light ? 'text-brand-ivory/70' : 'text-brand-muted'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-brand-gold-deep">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <span className={`text-sm ${textColor}`}>{rating.toFixed(1)}</span>
      <span className={`text-sm ${mutedColor}`}>({reviews})</span>
    </div>
  )
}

export default RatingStars

import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${light ? 'text-mist' : 'text-muted'}`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`star-${index}`}
            className={`h-4 w-4 ${index < Math.round(rating) ? 'fill-gold text-gold' : light ? 'text-mist/40' : 'text-line'}`}
          />
        ))}
      </div>
      <span className={light ? 'text-mist' : 'text-ink'}>{rating.toFixed(1)}</span>
      {typeof reviews === 'number' ? <span>({reviews})</span> : null}
    </div>
  )
}

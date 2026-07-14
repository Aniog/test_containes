import { Star } from 'lucide-react'

const StarRating = ({ rating, reviews, light = false }) => {
  return (
    <div className={`flex items-center gap-2 text-sm ${light ? 'text-ivory/85' : 'text-ink/80'}`}>
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span>{rating.toFixed(1)}</span>
      <span className={light ? 'text-ivory/55' : 'text-ink/55'}>({reviews})</span>
    </div>
  )
}

export default StarRating

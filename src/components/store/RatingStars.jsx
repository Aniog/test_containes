import { Star } from 'lucide-react'

export default function RatingStars({ rating = 5, reviewCount }) {
  return (
    <div className="flex items-center gap-3 text-sm text-stone">
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < rating ? 'fill-current' : ''}`}
          />
        ))}
      </div>
      {typeof reviewCount === 'number' ? <span>({reviewCount})</span> : null}
    </div>
  )
}

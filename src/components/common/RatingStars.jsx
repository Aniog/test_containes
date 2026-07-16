import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  const textColor = light ? 'text-velmora-paper/80' : 'text-velmora-olive'

  return (
    <div className={`flex items-center gap-2 text-xs ${textColor}`}>
      <div className="flex items-center gap-1 text-velmora-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.75}
          />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

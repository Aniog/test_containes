import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        light ? 'text-stone-200' : 'text-stone-600'
      }`}
    >
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.75}
          />
        ))}
      </div>
      <span className="font-medium text-inherit">{rating.toFixed(1)}</span>
      <span className={light ? 'text-stone-300/90' : 'text-stone-500'}>
        ({reviews})
      </span>
    </div>
  )
}

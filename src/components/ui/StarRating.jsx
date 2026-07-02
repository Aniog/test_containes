import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewCount, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-sm ${
        light ? 'text-stone-100' : 'text-stone-700'
      }`}
    >
      <div className="flex items-center gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="font-medium">
        {rating.toFixed(1)} <span className="text-stone-500">({reviewCount})</span>
      </span>
    </div>
  )
}

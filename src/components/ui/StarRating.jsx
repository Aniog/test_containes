import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating)
            ? 'fill-velvet-950 text-velvet-950'
            : 'text-velvet-300'}
          strokeWidth={1}
        />
      ))}
      {typeof count === 'number' && (
        <span className="ml-1.5 text-xs text-velvet-500 font-sans">
          ({count})
        </span>
      )}
    </div>
  )
}

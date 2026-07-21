import { Star } from 'lucide-react'

export default function StarRating({ rating = 5, count = null, size = 12 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            style={{
              color: i < Math.floor(rating) ? '#C9A96E' : '#E8E2D9',
              fill: i < Math.floor(rating) ? '#C9A96E' : '#E8E2D9',
            }}
          />
        ))}
      </div>
      {count !== null && (
        <span className="font-sans text-[10px] text-stone ml-1">({count})</span>
      )}
    </div>
  )
}

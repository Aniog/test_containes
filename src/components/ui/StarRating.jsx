import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 11 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          style={{
            fill: i < Math.floor(rating) ? '#C9A96E' : 'transparent',
            color: i < Math.floor(rating) ? '#C9A96E' : '#E0D9D0',
          }}
        />
      ))}
    </div>
  )
}

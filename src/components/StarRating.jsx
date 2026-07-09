import { Star } from 'lucide-react'

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-[${size}px] h-[${size}px] ${
              i <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-hairline-dark'
            }`}
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </div>
  )
}

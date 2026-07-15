import { Star } from 'lucide-react'

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={size}
            style={{
              fill: i <= Math.round(rating) ? '#b8924a' : '#e8dcc8',
              color: i <= Math.round(rating) ? '#b8924a' : '#e8dcc8',
            }}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-obsidian-400 font-sans">({count})</span>
      )}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function StarRating({ rating, reviews, showCount = true }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-3.5 h-3.5 ${
              s <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-sand'
            }`}
          />
        ))}
      </div>
      {showCount && reviews != null && (
        <span className="text-xs text-velmora-taupe">({reviews})</span>
      )}
    </div>
  )
}

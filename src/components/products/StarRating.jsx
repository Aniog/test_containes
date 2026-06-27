import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewCount, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = Math.min(Math.max(rating - star + 1, 0), 1)
          return (
            <div key={star} className="relative" style={{ width: size, height: size }}>
              <Star
                className="absolute text-warm"
                size={size}
                fill="#E5E0D8"
                stroke="#E5E0D8"
              />
              <div
                className="absolute overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  size={size}
                  className="text-gold"
                  fill="#B4862F"
                  stroke="#B4862F"
                />
              </div>
            </div>
          )
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-stone">({reviewCount})</span>
      )}
    </div>
  )
}

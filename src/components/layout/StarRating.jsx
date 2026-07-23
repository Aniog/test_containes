import { Star } from "lucide-react"

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(Math.max(rating - i + 1, 0), 1)
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute text-velmora-border"
              strokeWidth={1.5}
            />
            <div
              className="absolute overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={size}
                className="text-velmora-gold fill-velmora-gold"
                strokeWidth={1.5}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

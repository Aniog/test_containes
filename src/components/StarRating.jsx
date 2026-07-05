import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating)
        return (
          <Star
            key={i}
            size={size}
            className={filled ? 'text-vgold fill-vgold' : 'text-vborder'}
          />
        )
      })}
    </div>
  )
}

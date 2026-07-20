import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={
            s <= Math.round(rating)
              ? 'fill-velmora-gold text-velmora-gold'
              : 'fill-transparent text-velmora-stone'
          }
        />
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 'sm' }) {
  const stars = [1, 2, 3, 4, 5]
  const sz = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'

  return (
    <div className="flex items-center gap-0.5">
      {stars.map(s => (
        <Star
          key={s}
          className={`${sz} ${s <= Math.round(rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}`}
        />
      ))}
    </div>
  )
}

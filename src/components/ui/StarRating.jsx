import { Star } from 'lucide-react'

export default function StarRating({ rating, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClass} ${
            star <= Math.round(rating)
              ? 'fill-[#D4A843] text-[#D4A843]'
              : 'fill-none text-border'
          }`}
        />
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewCount, compact = false }) {
  return (
    <div className={`flex items-center gap-2 ${compact ? 'text-xs' : 'text-sm'}`}>
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < Math.round(rating) ? 'fill-current' : ''}`}
          />
        ))}
      </div>
      <span className="text-velmora-espresso/72">
        {rating.toFixed(1)}{reviewCount ? ` · ${reviewCount} reviews` : ''}
      </span>
    </div>
  )
}

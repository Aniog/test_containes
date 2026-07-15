import { Star } from 'lucide-react'

export default function StarRating({ value, reviews, className = '' }) {
  return (
    <div className={`flex items-center gap-3 text-sm text-velmora-taupe ${className}`}>
      <div className="flex items-center gap-1 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-velmora-ink">{value.toFixed(1)}</span>
      <span>({reviews} reviews)</span>
    </div>
  )
}

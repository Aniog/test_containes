import { Star } from 'lucide-react'

export default function RatingStars({ label = '4.9 rating from Velmora customers' }) {
  return (
    <div className="flex items-center gap-1 text-velmora-gold" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
      ))}
      <span className="ml-2 font-sansBody text-xs font-semibold uppercase tracking-nav text-velmora-muted">
        4.9
      </span>
    </div>
  )
}

import { Star } from 'lucide-react'

export default function Stars({ rating = 5, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink">
      <div className="flex items-center gap-0.5 text-velmora-gold" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={`${compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} fill-current`} strokeWidth={1.5} />
        ))}
      </div>
      {reviews ? <span className="text-xs uppercase tracking-nav text-velmora-clay">{reviews} reviews</span> : null}
    </div>
  )
}

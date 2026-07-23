import { Star } from 'lucide-react'

export default function Rating({ rating = 5, count, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-ink" aria-label={`${rating} out of 5 stars`}>
      <div className="flex items-center gap-0.5 text-velmora-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
        ))}
      </div>
      {!compact && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-clay">
          {rating.toFixed(1)} {count ? `(${count})` : ''}
        </span>
      )}
    </div>
  )
}

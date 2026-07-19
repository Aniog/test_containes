import { Star } from 'lucide-react'

const Rating = ({ value = 5, count, className = '' }) => (
  <div className={`flex items-center gap-2 text-sm text-velmora-ink ${className}`}>
    <div className="flex items-center gap-0.5 text-velmora-gold" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
      ))}
    </div>
    {count ? <span className="font-sans text-xs text-velmora-taupe">{value.toFixed(1)} ({count})</span> : null}
  </div>
)

export default Rating

import { Star } from 'lucide-react'

export default function Stars({ rating, className = '' }) {
  return (
    <div className={`flex items-center gap-1 text-velmora-gold ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-current" strokeWidth={1.5} />
      ))}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function Stars({ rating = 5, reviews, dark = false }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${dark ? 'fill-velmora-amber text-velmora-amber' : 'fill-velmora-gold text-velmora-gold'}`}
          />
        ))}
      </div>
      {reviews ? <span className="text-velmora-mocha">({reviews})</span> : null}
    </div>
  )
}

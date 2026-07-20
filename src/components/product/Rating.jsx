import { Star } from 'lucide-react'

export default function Rating({ rating, count }) {
  return (
    <div className="flex items-center gap-3 text-cocoa" aria-label={`${rating} out of 5 stars from ${count} reviews`}>
      <div className="flex text-antique">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-sm text-stone">{rating} ({count} reviews)</span>
    </div>
  )
}

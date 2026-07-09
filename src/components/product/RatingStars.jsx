import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviewCount, light = false }) {
  const starClass = light ? 'fill-velmora-gold text-velmora-gold' : 'fill-velmora-bronze text-velmora-bronze'
  const textClass = light ? 'text-velmora-mist/90' : 'text-velmora-cocoa/80'

  return (
    <div className={`flex items-center gap-2 text-sm ${textClass}`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={`h-4 w-4 ${starClass}`} strokeWidth={1.5} />
        ))}
      </div>
      <span>{rating.toFixed(1)}</span>
      <span>·</span>
      <span>{reviewCount} reviews</span>
    </div>
  )
}

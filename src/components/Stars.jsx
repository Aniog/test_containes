import { Star } from 'lucide-react'

function Stars({ rating, reviewCount, light = false }) {
  const textColor = light ? 'text-velmora-cream/90' : 'text-velmora-mute'
  const starColor = light ? 'text-velmora-gold' : 'text-velmora-gold-deep'

  return (
    <div className={`flex items-center gap-2 text-xs tracking-[0.16em] ${textColor}`}>
      <div className={`flex items-center gap-1 ${starColor}`} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviewCount} reviews
      </span>
    </div>
  )
}

export default Stars

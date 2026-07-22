import { Star } from 'lucide-react'

const Stars = ({ rating, reviewCount, light = false }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              light ? 'fill-velmora-champagne text-velmora-champagne' : 'fill-velmora-bronze text-velmora-bronze'
            }`}
          />
        ))}
      </div>
      <p className={`text-sm ${light ? 'text-velmora-champagne' : 'text-velmora-rose'}`}>
        {rating.toFixed(1)} {reviewCount ? `(${reviewCount})` : ''}
      </p>
    </div>
  )
}

export default Stars

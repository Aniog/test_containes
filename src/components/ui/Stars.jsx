import { Star } from 'lucide-react'

const Stars = ({ rating = 5, reviews, light = false }) => {
  const tone = light ? 'text-velmora-ivory/90' : 'text-velmora-mocha'

  return (
    <div className={`flex items-center gap-3 text-sm ${tone}`}>
      <div className="flex items-center gap-1 text-velmora-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span>{rating.toFixed(1)}{reviews ? ` · ${reviews} reviews` : ''}</span>
    </div>
  )
}

export default Stars

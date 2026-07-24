import { Star } from 'lucide-react'

const Stars = ({ rating, light = false, reviewCount }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3.5 w-3.5 fill-current"
            strokeWidth={1.6}
          />
        ))}
      </div>
      <p className={`text-sm ${light ? 'text-ivory-deep/80' : 'text-velvet/65'}`}>
        {rating.toFixed(1)}{reviewCount ? ` · ${reviewCount} reviews` : ''}
      </p>
    </div>
  )
}

export default Stars

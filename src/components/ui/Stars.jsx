import { Star } from 'lucide-react'

const Stars = ({ className = 'text-amber-500', size = 14 }) => (
  <div className={`flex items-center gap-1 ${className}`} aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className="fill-current" size={size} />
    ))}
  </div>
)

export default Stars

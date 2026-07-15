import { Star } from 'lucide-react'

const Stars = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-3.5 w-3.5 fill-amber-200 text-amber-200" />
      ))}
    </div>
  )
}

export default Stars

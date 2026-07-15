import { Star } from 'lucide-react'

const Stars = ({ value }) => (
  <div className="flex items-center gap-1 text-amber-300" aria-label={`${value} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className="h-4 w-4 fill-current"
        strokeWidth={1.5}
      />
    ))}
  </div>
)

export default Stars

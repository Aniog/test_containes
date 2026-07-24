import { Star } from 'lucide-react'

const Stars = ({ value, reviews, light = false }) => (
  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em]">
    <div className="flex items-center gap-1 text-amber-200">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={`star-${index}`} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
    <span className={light ? 'text-stone-200' : 'text-stone-500'}>
      {value.toFixed(1)} · {reviews} reviews
    </span>
  </div>
)

export default Stars

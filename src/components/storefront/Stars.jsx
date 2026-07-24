import { Star } from 'lucide-react'

const Stars = ({ rating, reviews, light = false }) => {
  const textColor = light ? 'text-[rgba(247,242,234,0.9)]' : 'text-[#6f5946]'

  return (
    <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] ${textColor}`}>
      <div className="flex items-center gap-1 text-[#c19a6b]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </div>
      <span>{rating.toFixed(1)} · {reviews} reviews</span>
    </div>
  )
}

export default Stars

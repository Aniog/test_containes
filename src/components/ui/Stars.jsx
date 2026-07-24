import { Star } from 'lucide-react'

export default function Stars({ rating, reviews, centered = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm text-[#6d5a57] ${
        centered ? 'justify-center' : ''
      }`}
    >
      <div className="flex items-center gap-1 text-[#b78b54]">
        {[...Array(5)].map((_, index) => (
          <Star
            key={`star-${index}`}
            className={`h-3.5 w-3.5 ${index < Math.round(rating) ? 'fill-current' : ''}`}
          />
        ))}
      </div>
      <span>{rating.toFixed(1)}</span>
      {typeof reviews === 'number' ? <span>({reviews})</span> : null}
    </div>
  )
}

import { Star } from 'lucide-react'

export default function RatingStars({ rating, reviews, light = false }) {
  const textColor = light ? 'text-pearl' : 'text-espresso'
  const subColor = light ? 'text-champagne' : 'text-mocha'

  return (
    <div className={`flex items-center gap-3 ${textColor}`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-gold text-gold" strokeWidth={1.5} />
        ))}
      </div>
      <span className="text-sm font-medium">{rating.toFixed(1)}</span>
      {typeof reviews === 'number' ? (
        <span className={`text-sm ${subColor}`}>({reviews} reviews)</span>
      ) : null}
    </div>
  )
}

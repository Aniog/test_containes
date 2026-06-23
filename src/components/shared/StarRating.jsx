import { Star } from 'lucide-react'

function StarRating({ rating, reviews, tone = 'light' }) {
  const textColor = tone === 'dark' ? 'text-stone-900' : 'text-stone-100'
  const metaColor = tone === 'dark' ? 'text-stone-700' : 'text-stone-400'

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-amber-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star className="h-4 w-4 fill-current" key={index} />
        ))}
      </div>
      <span className={`text-sm ${textColor}`}>{rating.toFixed(1)}</span>
      <span className={`text-sm ${metaColor}`}>({reviews} reviews)</span>
    </div>
  )
}

export default StarRating

import { Star } from 'lucide-react'

function StarRating({ value, reviews, dark = false }) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm ${dark ? 'text-stone-300' : 'text-stone-500'}`}>
      <div className="flex items-center gap-1 text-amber-200">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className={dark ? 'text-stone-100' : 'text-stone-700'}>{value}</span>
      <span>({reviews} reviews)</span>
    </div>
  )
}

export default StarRating

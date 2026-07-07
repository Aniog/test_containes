import { Star } from 'lucide-react'

export default function RatingStars({ value, reviewCount, light = false }) {
  return (
    <div className={`flex items-center gap-2 text-sm ${light ? 'text-porcelain/85' : 'text-espresso/75'}`}>
      <div className="flex items-center gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="font-medium text-inherit">{value.toFixed(1)}</span>
      <span className="text-inherit/80">({reviewCount} reviews)</span>
    </div>
  )
}

import { Star } from 'lucide-react'

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1 text-champagne" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
      <span className="ml-2 text-xs uppercase tracking-editorial text-truffle">{rating}</span>
    </div>
  )
}

export default Stars

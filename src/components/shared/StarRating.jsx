import { Star } from 'lucide-react'

function StarRating({ rating, reviewCount, light = false }) {
  const colorClass = light ? 'text-velmora-pearl' : 'text-velmora-ink'
  const mutedClass = light ? 'text-velmora-pearl/80' : 'text-velmora-truffle'

  return (
    <div className={`flex items-center gap-2 text-sm ${mutedClass}`}>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 fill-current ${colorClass}`}
          />
        ))}
      </div>
      <span className={colorClass}>{rating.toFixed(1)}</span>
      <span className={mutedClass}>({reviewCount})</span>
    </div>
  )
}

export default StarRating

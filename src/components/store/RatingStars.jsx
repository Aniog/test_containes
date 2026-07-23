import { Star } from 'lucide-react'

const RatingStars = ({ rating, reviewCount, light = false }) => {
  const textColor = light ? 'text-velmora-ivory' : 'text-velmora-noir'
  const subtleColor = light ? 'text-velmora-ivory/70' : 'text-velmora-noir/60'

  return (
    <div className={`flex items-center gap-2 ${textColor}`}>
      <div className="flex items-center gap-1 text-velmora-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-sm font-medium">{rating.toFixed(1)}</span>
      <span className={`text-sm ${subtleColor}`}>({reviewCount})</span>
    </div>
  )
}

export default RatingStars

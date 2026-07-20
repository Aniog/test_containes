import { Star } from 'lucide-react'

export default function Rating({ rating, reviews, className = '' }) {
  return (
    <div className={`flex items-center gap-2 text-velmora-ink ${className}`}>
      <div className="flex text-velmora-gold" aria-label={`${rating} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((star) => (
          <Star key={star} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="text-sm text-velmora-taupe">{rating.toFixed(1)} · {reviews} reviews</span>
    </div>
  )
}

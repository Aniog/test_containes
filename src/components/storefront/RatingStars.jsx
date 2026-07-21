export default function RatingStars({ rating, reviews, light = false }) {
  const textColor = light ? 'text-velmora-ivory/90' : 'text-velmora-stone'

  return (
    <div className={`flex items-center gap-3 text-sm ${textColor}`}>
      <div className="flex items-center gap-1 text-velmora-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <span>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

import { Star } from "lucide-react"

const RatingStars = ({ rating, reviews, light = false }) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className={`flex items-center gap-1 ${light ? "text-gold" : "text-gold"}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-current"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className={light ? "text-ivory/80" : "text-velvet/70"}>
        {rating.toFixed(1)} · {reviews} reviews
      </span>
    </div>
  )
}

export default RatingStars

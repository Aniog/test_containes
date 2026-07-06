import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function Stars({ rating, className }) {
  const full = Math.floor(rating)
  const partial = rating - full
  const empty = 5 - full - (partial > 0 ? 1 : 0)

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-3.5 w-3.5 fill-gold text-gold" />
      ))}
      {partial > 0 && (
        <div className="relative h-3.5 w-3.5">
          <Star className="absolute inset-0 h-3.5 w-3.5 text-sand" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${partial * 100}%` }}>
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="h-3.5 w-3.5 text-sand" />
      ))}
    </div>
  )
}

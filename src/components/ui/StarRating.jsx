import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ value = 5, size = 14, className }) {
  const full = Math.floor(value)
  const stars = Array.from({ length: 5 }, (_, i) => i < full)
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {stars.map((on, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={on ? "fill-gold text-gold" : "fill-line text-line"}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

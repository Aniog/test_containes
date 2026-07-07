import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

const StarRating = ({ rating = 5, className, size = 14 }) => {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "fill-current",
            i < rating ? "text-velmora-gold" : "text-velmora-border"
          )}
        />
      ))}
    </div>
  )
}

export { StarRating }

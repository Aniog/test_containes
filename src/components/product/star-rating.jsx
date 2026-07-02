import React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export const StarRating = ({ rating, count, className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-3.5 w-3.5 fill-current",
              star <= Math.round(rating) ? "text-gold" : "text-hairline"
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-muted">({count})</span>
      )}
    </div>
  )
}

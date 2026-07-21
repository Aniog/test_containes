import React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StarRating({ rating = 5, size = 14, className }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={
            i < Math.round(rating)
              ? "fill-accent text-accent"
              : "fill-line text-line"
          }
          strokeWidth={1}
        />
      ))}
    </span>
  )
}

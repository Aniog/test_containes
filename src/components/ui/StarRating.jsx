import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({ rating = 5, count, className }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i <= Math.round(rating)
                ? "fill-primary text-primary"
                : "fill-transparent text-muted-foreground",
            )}
          />
        ))}
      </div>
      {count != null && (
        <span className="text-xs text-muted-foreground">({count})</span>
      )}
    </div>
  )
}

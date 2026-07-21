import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Rating({ value = 0, count, size = "sm", showCount = true, className = "" }) {
  const stars = Math.round(value)
  const sizeMap = { xs: 10, sm: 12, md: 16, lg: 20 }
  const px = sizeMap[size] || 12
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={cn(
              i < stars ? "fill-gold-400 text-gold-400" : "fill-transparent text-taupe-300"
            )}
            width={px}
            height={px}
            strokeWidth={1.25}
          />
        ))}
      </div>
      {showCount && count != null && (
        <span className="text-[11px] tracking-[0.12em] uppercase text-taupe-500">
          {count}
        </span>
      )}
    </div>
  )
}

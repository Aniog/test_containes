import { cn } from "@/lib/utils"

export default function StarRating({ value = 0, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.25 && value - full < 0.75
  const roundedFull = value - full >= 0.75 ? full + 1 : full

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center" aria-label={`Rated ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < roundedFull
          const half = hasHalf && i === full
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              className={cn(filled || half ? "text-gold" : "text-sand")}
              fill="currentColor"
              aria-hidden="true"
            >
              {half ? (
                <>
                  <defs>
                    <linearGradient id={`half-${i}`}>
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="#E8DECF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill={`url(#half-${i})`}
                    d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </>
              ) : (
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              )}
            </svg>
          )
        })}
      </div>
      {showValue && (
        <span className="text-xs text-taupe">
          {value.toFixed(1)}
          {typeof reviews === "number" ? ` (${reviews})` : ""}
        </span>
      )}
    </div>
  )
}

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Editorial star rating — small gold stars with optional count.
 */
export function StarRating({
  value = 5,
  count,
  size = "sm",
  tone = "dark",
  className,
}) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < Math.round(value));
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
        {stars.map((filled, i) => (
          <Star
            key={i}
            className={cn(
              starSize,
              filled ? "fill-gold text-gold" : "text-hairline",
              tone === "light" && !filled && "text-ivory/30",
            )}
            strokeWidth={1.2}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span
          className={cn(
            "text-xs font-sans",
            tone === "light" ? "text-ivory/70" : "text-muted",
          )}
        >
          ({count})
        </span>
      )}
    </div>
  );
}
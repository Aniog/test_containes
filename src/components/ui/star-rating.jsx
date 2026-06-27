import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export function StarRating({ value = 5, count, className, size = 14 }) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="inline-flex" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            strokeWidth={1.25}
            size={size}
            className={cn(
              i < Math.floor(value) ? "fill-gold text-gold" : "text-hairline"
            )}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="text-xs text-ink-muted">({count})</span>
      )}
    </div>
  );
}

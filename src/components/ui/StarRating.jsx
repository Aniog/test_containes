import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ value = 5, size = 14, className, showValue = false }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <span className={cn("inline-flex items-center gap-1", className)} aria-label={`${value} out of 5 stars`}>
      <span className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFull = i < full;
          const isHalf = !isFull && i === full && hasHalf;
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.4}
              className={cn(
                isFull || isHalf
                  ? "fill-gold text-gold"
                  : "text-line",
              )}
            />
          );
        })}
      </span>
      {showValue && (
        <span className="text-xs text-ink-secondary tracking-wide">{value.toFixed(1)}</span>
      )}
    </span>
  );
}

export default StarRating;

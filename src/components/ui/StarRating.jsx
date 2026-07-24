import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ value = 0, count, size = 14, className, showCount = true }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full;
          const isHalf = !filled && i === full && half;
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.25}
              className={cn(
                "transition-colors",
                filled || isHalf
                  ? "fill-gold text-gold"
                  : "text-hairline"
              )}
            />
          );
        })}
      </div>
      {showCount && (
        <span className="text-[12px] text-taupe">
          {value.toFixed(1)}
          {typeof count === "number" && (
            <span className="ml-1">({count})</span>
          )}
        </span>
      )}
    </div>
  );
}

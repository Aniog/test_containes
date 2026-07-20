import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  value = 5,
  count,
  size = 14,
  className = "",
  showCount = true,
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center" aria-label={`Rated ${value} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = i < full;
          const isHalf = !filled && i === full && half;
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star
                className="absolute inset-0 text-hairline"
                style={{ width: size, height: size }}
                strokeWidth={1.25}
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: isHalf ? "50%" : filled ? "100%" : "0%" }}
              >
                <Star
                  className="text-bronze"
                  style={{ width: size, height: size }}
                  fill="currentColor"
                  strokeWidth={1.25}
                />
              </span>
            </span>
          );
        })}
      </div>
      {showCount && typeof count === "number" && (
        <span className="text-[11px] text-muted tabular-nums">({count})</span>
      )}
    </div>
  );
}

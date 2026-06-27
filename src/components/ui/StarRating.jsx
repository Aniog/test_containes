import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  rating = 5,
  count,
  size = "sm",
  className,
  showCount = true,
}) {
  const sizes = {
    sm: { star: "w-3 h-3", text: "text-xs" },
    md: { star: "w-4 h-4", text: "text-sm" },
    lg: { star: "w-5 h-5", text: "text-base" },
  };
  const s = sizes[size] ?? sizes.sm;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 text-muted",
        className
      )}
      aria-label={`Rated ${rating} out of 5`}
    >
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            strokeWidth={1.25}
            className={cn(
              s.star,
              i < Math.round(rating)
                ? "fill-champagne text-champagne"
                : "text-line"
            )}
          />
        ))}
      </div>
      {showCount && typeof count === "number" && (
        <span className={cn(s.text, "text-muted tracking-wide")}>
          ({count})
        </span>
      )}
    </div>
  );
}
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  rating = 0,
  size = 14,
  showNumber = false,
  className,
  color = "#B89968",
}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.4 && rating - full < 0.9;
  const total = 5;
  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={`${rating} out of ${total} stars`}
    >
      <span className="inline-flex">
        {Array.from({ length: total }).map((_, i) => {
          if (i < full) {
            return (
              <Star
                key={i}
                size={size}
                strokeWidth={1.4}
                fill={color}
                stroke={color}
                className="shrink-0"
              />
            );
          }
          if (i === full && hasHalf) {
            return (
              <span
                key={i}
                className="relative inline-block shrink-0"
                style={{ width: size, height: size }}
              >
                <Star
                  size={size}
                  strokeWidth={1.4}
                  fill="none"
                  stroke={color}
                  className="absolute inset-0"
                />
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: size / 2 }}
                >
                  <Star
                    size={size}
                    strokeWidth={1.4}
                    fill={color}
                    stroke={color}
                  />
                </span>
              </span>
            );
          }
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.4}
              fill="none"
              stroke={color}
              className="shrink-0"
            />
          );
        })}
      </span>
      {showNumber ? (
        <span className="ml-1 text-xs tracking-wide text-muted">{rating.toFixed(1)}</span>
      ) : null}
    </div>
  );
}

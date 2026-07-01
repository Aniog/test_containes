import { Star } from "lucide-react";

export default function StarRating({ value = 5, size = 12, count = 5, tone = "#C99A4A" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.4 && value - full < 0.9;
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${value} out of ${count} stars`}>
      {Array.from({ length: count }).map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && i === full && half;
        return (
          <Star
            key={i}
            className="w-3 h-3"
            style={{
              width: size,
              height: size,
              color: isFull || isHalf ? tone : "rgba(168, 130, 80, 0.25)",
              fill: isFull || isHalf ? tone : "transparent",
            }}
            strokeWidth={1.2}
          />
        );
      })}
    </div>
  );
}

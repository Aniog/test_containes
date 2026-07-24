import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < full
              ? "fill-champagne text-champagne"
              : i === full && hasHalf
              ? "fill-champagne/50 text-champagne"
              : "fill-none text-stone"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

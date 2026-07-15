import { Star } from "lucide-react";

export function StarRating({ rating, count }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < full || (i === full && hasHalf);
          return (
            <Star
              key={i}
              className={`w-4 h-4 ${
                isFilled ? "fill-velmora-gold text-velmora-gold" : "text-velmora-sand"
              }`}
            />
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </div>
  );
}

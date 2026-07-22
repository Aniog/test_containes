import { Star } from "lucide-react";

export function StarRating({ rating, count, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? "fill-gold text-gold"
                : "fill-taupe text-taupe"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-manrope text-warm-gray">
        {rating.toFixed(1)}
        {count !== undefined && (
          <span className="ml-1">({count})</span>
        )}
      </span>
    </div>
  );
}

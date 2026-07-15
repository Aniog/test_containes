import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14, showValue = false, className = "" }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= Math.round(rating) ? "fill-gold text-gold" : "text-ink/20"}
          strokeWidth={1.5}
        />
      ))}
      {showValue && (
        <span className="ml-1 text-xs text-ink-muted font-sans">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

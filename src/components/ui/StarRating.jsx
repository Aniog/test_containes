import { Star } from "lucide-react";

export default function StarRating({
  value = 0,
  count = null,
  size = 14,
  className = "",
}) {
  const safe = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-0.5 text-gold">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            strokeWidth={1}
            fill={i < Math.round(safe) ? "currentColor" : "none"}
            className={i < Math.round(safe) ? "" : "text-gold/40"}
          />
        ))}
      </div>
      {count !== null && (
        <span className="text-xs text-muted tabular-nums">
          {safe.toFixed(1)} · {count} reviews
        </span>
      )}
    </div>
  );
}

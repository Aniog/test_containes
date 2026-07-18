import { Star } from "lucide-react";

export function StarRating({ rating, count, size = "sm" }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const sz = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {stars.map((s) => (
          <Star
            key={s}
            className={sz}
            fill={s <= Math.round(rating) ? "#C9A96E" : "none"}
            stroke={s <= Math.round(rating) ? "#C9A96E" : "#9E9189"}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="font-sans text-xs text-stone-warm">({count})</span>
      )}
    </div>
  );
}

import { Star } from "lucide-react";

export default function RatingStars({ value = 5, count, size = 12, color = "#D4B481" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "full";
    if (i === full && half) return "half";
    return "empty";
  });
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`${value} out of 5`}>
      <span className="inline-flex items-center gap-0.5">
        {stars.map((kind, idx) => (
          <Star
            key={idx}
            size={size}
            strokeWidth={1.4}
            fill={kind === "empty" ? "transparent" : color}
            stroke={color}
            className="shrink-0"
          />
        ))}
      </span>
      {typeof count === "number" && (
        <span className="text-[11px] tracking-widest2 uppercase text-muted">
          {value.toFixed(1)} · {count}
        </span>
      )}
    </span>
  );
}
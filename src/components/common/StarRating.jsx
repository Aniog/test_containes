import { Star } from "lucide-react";

export default function StarRating({ value = 5, size = 14, className = "" }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <div
      className={`inline-flex items-center gap-0.5 text-gold ${className}`}
      aria-label={`${value} out of 5 stars`}
    >
      {stars.map((filled, i) => (
        <Star
          key={i}
          strokeWidth={1.5}
          className={filled ? "fill-gold text-gold" : "text-gold-soft"}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

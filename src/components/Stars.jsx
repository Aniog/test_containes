import { Star } from "lucide-react";

export default function Stars({ rating, size = 14, className = "" }) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-sand text-sand"
          }
        />
      ))}
    </div>
  );
}

import { Star } from "lucide-react";

export default function StarRating({ rating = 0, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < full ? "text-accent fill-accent" : "text-[#333]"}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
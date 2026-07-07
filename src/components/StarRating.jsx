import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-[${size}px] h-[${size}px] ${
            i < Math.round(rating)
              ? "fill-velmora-star text-velmora-star"
              : "fill-velmora-hairline text-velmora-hairline"
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

import { Star } from "lucide-react";

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-[14px] h-[14px] fill-accent text-accent"
            style={{ width: size, height: size }}
          />
        ))}
      </div>
      <span className="text-xs text-warmgray">
        {rating} ({count})
      </span>
    </div>
  );
}

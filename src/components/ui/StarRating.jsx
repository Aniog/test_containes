import { Star } from "lucide-react";

export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < Math.floor(rating)
              ? "text-[#B8966A] fill-[#B8966A]"
              : i < rating
              ? "text-[#B8966A] fill-[#B8966A]/50"
              : "text-[#B8966A]/20"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

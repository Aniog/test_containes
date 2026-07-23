import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating = 5, className, size = 13 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = rating >= i - 0.25;
    stars.push(
      <Star
        key={i}
        size={size}
        strokeWidth={0}
        className={filled ? "fill-gold text-gold" : "fill-champagne text-champagne"}
      />
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-[3px]", className)} aria-label={`Rated ${rating} out of 5`}>
      {stars}
    </span>
  );
}

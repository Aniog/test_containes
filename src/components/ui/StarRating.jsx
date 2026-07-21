import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating = 5, className, size = 14 }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

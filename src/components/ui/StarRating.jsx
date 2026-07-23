import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(
            "fill-current",
            star <= Math.round(rating) ? "text-gold" : "text-taupe"
          )}
        />
      ))}
    </div>
  );
}

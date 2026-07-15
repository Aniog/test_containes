import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating);
        return (
          <Star
            key={star}
            size={size}
            className={cn(
              "transition-colors",
              filled ? "fill-gold text-gold" : "fill-transparent text-taupe"
            )}
          />
        );
      })}
    </div>
  );
}

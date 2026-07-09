import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn("inline-flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              "shrink-0",
              filled ? "fill-gold text-gold" : "fill-transparent text-hairline"
            )}
          />
        );
      })}
    </div>
  );
}

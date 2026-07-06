import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              "fill-current",
              filled ? "text-gold" : "text-hairline"
            )}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

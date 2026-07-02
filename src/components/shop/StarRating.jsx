import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, size = 14, showValue = true, reviewCount }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              "fill-current",
              star <= Math.round(rating) ? "text-velmora-gold" : "text-velmora-border"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-velmora-muted">
          {rating}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating = 5, reviewCount, size = 14, className, showCount = true }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {stars.map((i) => {
          const filled = i <= Math.round(rating);
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.5}
              className={cn(
                filled ? "text-velmora-gold fill-velmora-gold" : "text-velmora-stone",
              )}
            />
          );
        })}
      </div>
      {showCount && (
        <span className="text-[11px] uppercase tracking-[0.22em] text-velmora-mocha">
          {rating.toFixed(1)}
          {reviewCount != null && <span className="ml-2 text-velmora-stone">({reviewCount})</span>}
        </span>
      )}
    </div>
  );
}

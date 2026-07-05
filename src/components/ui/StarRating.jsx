import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({ value = 0, size = 14, className, showCount = false, count = 0 }) => {
  const stars = Array.from({ length: 5 });
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="inline-flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
        {stars.map((_, i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              "transition-colors",
              i < Math.round(value)
                ? "fill-accent text-accent"
                : "fill-transparent text-muted-foreground/40"
            )}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showCount && count > 0 && (
        <span className="ml-1 text-xs text-muted-foreground">({count})</span>
      )}
    </div>
  );
};

export default StarRating;

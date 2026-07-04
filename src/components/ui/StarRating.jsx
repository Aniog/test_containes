import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils.js";

const StarRating = ({ value = 5, count, size = 14, className, tone = "champagne" }) => {
  const color = tone === "ink" ? "fill-ink text-ink" : "fill-champagne text-champagne";
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              i < Math.round(value) ? color : "text-champagne/30 fill-champagne/30"
            )}
          />
        ))}
      </div>
      {typeof count === "number" && (
        <span className="text-[0.78rem] text-mute font-sans">({count})</span>
      )}
    </div>
  );
};

export default StarRating;

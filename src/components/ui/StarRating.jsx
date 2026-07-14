import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  value = 5,
  size = 14,
  className,
  showValue = false,
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="inline-flex" aria-label={`Rated ${value} out of 5`}>
        {stars.map((filled, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.4}
            className={cn(filled ? "fill-gold text-gold" : "text-ash")}
          />
        ))}
      </div>
      {showValue && (
        <span className="ml-1 text-xs text-ash tracking-wide">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}

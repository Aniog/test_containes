import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils.js";

export default function StarRating({ value = 0, size = 14, className = "", showValue = false }) {
  const rounded = Math.round(value);
  return (
    <span className={cn("inline-flex items-center gap-1", className)} aria-label={`${value} out of 5 stars`}>
      <span className="inline-flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={cn(
              "transition-colors",
              i < rounded ? "text-gold-400 fill-gold-400" : "text-muted-400/40"
            )}
            style={{ width: size, height: size }}
            strokeWidth={1.25}
          />
        ))}
      </span>
      {showValue && (
        <span className="text-[11px] tracking-[0.18em] text-muted-500 ml-1">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}

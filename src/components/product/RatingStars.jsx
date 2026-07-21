import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RatingStars({ value = 0, size = 14, className }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const total = 5;
  return (
    <div
      className={cn("inline-flex items-center gap-0.5 text-gold", className)}
      aria-label={`${value} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: total }).map((_, i) => {
        const isFull = i < full;
        const isHalf = !isFull && i === full && half;
        return (
          <Star
            key={i}
            className={cn(
              "transition-colors",
              isFull || isHalf ? "fill-gold text-gold" : "text-espresso/15"
            )}
            style={{ width: size, height: size, strokeWidth: 1.2 }}
          />
        );
      })}
    </div>
  );
}

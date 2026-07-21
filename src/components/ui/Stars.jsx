import React from "react";
import { Star, StarHalf } from "lucide-react";

export default function Stars({ rating = 5, size = 14, className = "" }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-gold ${className}`}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return (
            <Star key={i} size={size} strokeWidth={0} fill="currentColor" />
          );
        }
        if (i === full && half) {
          return (
            <span key={i} className="relative inline-flex">
              <Star
                size={size}
                className="text-line"
                strokeWidth={0}
                fill="currentColor"
              />
              <StarHalf
                size={size}
                className="absolute inset-0 text-gold"
                strokeWidth={0}
                fill="currentColor"
              />
            </span>
          );
        }
        return (
          <Star
            key={i}
            size={size}
            className="text-line"
            strokeWidth={0}
            fill="currentColor"
          />
        );
      })}
    </span>
  );
}

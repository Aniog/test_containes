import React from "react";
import { Star } from "lucide-react";

export default function Stars({ value = 5, size = 14, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 text-gold ${className}`}
      aria-label={`Rated ${value} out of 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          fill={i < Math.round(value) ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

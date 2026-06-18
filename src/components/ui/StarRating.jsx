import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating = 5, size = 14, className = "" }) {
  const full = Math.floor(rating);
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < full ? "fill-gold text-gold" : "text-sand"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

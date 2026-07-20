import React from "react";
import { Star } from "lucide-react";

export function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="star"
          size={size}
          fill={i < fullStars ? "currentColor" : "none"}
          strokeWidth={i < fullStars ? 0 : 1.5}
        />
      ))}
    </div>
  );
}

import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating = 5, count, size = "sm", className = "" }) {
  const filled = Math.round(rating);
  const sizeClass = size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label={`${rating} out of 5${count ? `, ${count} reviews` : ""}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClass} ${i < filled ? "text-gold-deep" : "text-hairline"}`}
            fill={i < filled ? "currentColor" : "none"}
            strokeWidth={1.25}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-[11px] uppercase tracking-[0.18em] text-taupe">
          ({count})
        </span>
      )}
    </div>
  );
}

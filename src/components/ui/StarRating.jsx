import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating, size = 14, showCount, count }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "fill-current",
            star <= rating ? "text-star" : "text-border"
          )}
          size={size}
        />
      ))}
      {showCount && count !== undefined && (
        <span className="text-xs text-text-tertiary ml-1">({count})</span>
      )}
    </div>
  );
}

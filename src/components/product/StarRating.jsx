import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating, reviewCount, size = 16 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              "fill-current",
              i < Math.round(rating) ? "text-velmora-gold" : "text-velmora-border"
            )}
          />
        ))}
      </div>
      {reviewCount != null && (
        <span className="text-xs text-velmora-muted">({reviewCount} reviews)</span>
      )}
    </div>
  );
}

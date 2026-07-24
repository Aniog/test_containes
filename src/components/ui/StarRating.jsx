import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating = 5, count, size = "sm", className }) {
  const dims = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="flex items-center" aria-label={`Rated ${rating} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={cn(dims, i < Math.round(rating) ? "text-gold fill-gold" : "text-hairline fill-hairline")}
            strokeWidth={1.2}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-[11px] uppercase tracking-wide-2 text-cocoa">
          ({count})
        </span>
      )}
    </div>
  );
}

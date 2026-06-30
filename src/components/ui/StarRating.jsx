import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ value = 0, count, size = "sm", className }) {
  const dims = size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5";
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="flex items-center gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              dims,
              i < Math.round(value) ? "fill-current" : "opacity-30"
            )}
          />
        ))}
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-mute tracking-wide">({count})</span>
      )}
    </div>
  );
}

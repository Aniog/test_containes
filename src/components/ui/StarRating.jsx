import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ value = 5, size = 14, className = "", color = "champagne" }) {
  const fullStars = Math.floor(value);
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.2}
          className={
            i < fullStars
              ? color === "champagne"
                ? "fill-champagne-500 text-champagne-500"
                : "fill-ink-950 text-ink-950"
              : "text-sand-300"
          }
        />
      ))}
    </div>
  );
}

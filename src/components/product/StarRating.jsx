import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ value = 0, size = "md", className = "" }) {
  const sizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div
      className={cn("inline-flex items-center gap-0.5 text-gold", className)}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            className={cn(sizes[size], filled ? "fill-gold text-gold" : "text-dune fill-dune")}
            strokeWidth={1}
          />
        );
      })}
    </div>
  );
}

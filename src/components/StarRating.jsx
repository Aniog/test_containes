import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ rating, className, size = "w-3.5 h-3.5" }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size,
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-transparent text-gold/40"
          )}
        />
      ))}
    </span>
  );
}

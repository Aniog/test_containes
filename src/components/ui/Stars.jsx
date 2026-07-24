import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Stars({ rating = 5, className, size = "h-3.5 w-3.5" }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            size,
            i < Math.round(rating) ? "fill-gold text-gold" : "fill-sand text-sand"
          )}
        />
      ))}
    </span>
  );
}

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ value = 5, size = 14, className }) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(value);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-gold text-gold" : "fill-line text-line"}
          />
        );
      })}
    </div>
  );
}

export default Stars;

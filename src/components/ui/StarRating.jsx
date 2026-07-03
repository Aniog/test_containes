import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  value = 5,
  size = 14,
  className,
  tone = "gold",
}) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`${value} out of 5 stars`}
      role="img"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={cn(
            i < Math.round(value) ? "fill-current" : "fill-none",
            tone === "gold" ? "text-gold" : "text-ivory",
          )}
          strokeWidth={1.25}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

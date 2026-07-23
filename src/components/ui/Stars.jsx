import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Stars({ value = 5, className, size = 14 }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(value);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-bronze text-bronze" : "text-line"}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

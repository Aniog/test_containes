import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ value = 0, count, size = 14, className, ariaLabel, showNumber = true }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const label = ariaLabel || `Rated ${value} out of 5${count ? `, ${count} reviews` : ""}`;
  return (
    <div
      className={cn("inline-flex items-center gap-2", className)}
      aria-label={label}
    >
      <span className="inline-flex" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i < full;
          const isHalf = !filled && i === full && half;
          return (
            <span
              key={i}
              className="relative inline-block"
              style={{ width: size, height: size }}
            >
              <Star
                size={size}
                className="absolute inset-0 text-gold-100"
                strokeWidth={1.4}
              />
              {(filled || isHalf) && (
                <Star
                  size={size}
                  className="absolute inset-0 text-gold-400"
                  fill="currentColor"
                  strokeWidth={1.4}
                  style={isHalf ? { clipPath: "inset(0 50% 0 0)" } : undefined}
                />
              )}
            </span>
          );
        })}
      </span>
      {showNumber && (
        <span className="text-[12px] tracking-wide text-sand-600 font-sans">
          {Number(value).toFixed(1)}
          {typeof count === "number" && (
            <span className="text-sand-600/70"> · {count} reviews</span>
          )}
        </span>
      )}
    </div>
  );
}

export default StarRating;

import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const StarRating = ({
  value = 0,
  count,
  size = 14,
  showCount = true,
  className,
  tone = "ink",
}) => {
  const safeValue = Math.max(0, Math.min(5, value));
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)} aria-label={`${safeValue} out of 5 stars`}>
      <div className="inline-flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => {
          const fillPercent = Math.max(0, Math.min(1, safeValue - i));
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star
                size={size}
                strokeWidth={1.5}
                className={cn(
                  tone === "ink" ? "text-ink/30" : "text-ivory/30",
                  "absolute inset-0"
                )}
                fill="currentColor"
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent * 100}%` }}
              >
                <Star
                  size={size}
                  strokeWidth={1.5}
                  className={tone === "ink" ? "text-gold" : "text-gold"}
                  fill="currentColor"
                />
              </span>
            </span>
          );
        })}
      </div>
      {showCount && typeof count === "number" && (
        <span
          className={cn(
            "font-sans text-[11px]",
            tone === "ink" ? "text-taupe" : "text-ivory/70"
          )}
        >
          ({count})
        </span>
      )}
    </div>
  );
};

export default StarRating;

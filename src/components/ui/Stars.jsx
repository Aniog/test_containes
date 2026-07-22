import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Stars({ value = 5, count, size = 12, className, tone = "brass" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const fillColor = tone === "ivory" ? "#FAF6EF" : "#A8824A";

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFull = i < full;
          const isHalf = i === full && half;
          return (
            <Star
              key={i}
              size={size}
              strokeWidth={1.5}
              color={isFull || isHalf ? fillColor : "transparent"}
              fill={isFull ? fillColor : isHalf ? `url(#half-${tone})` : "transparent"}
            />
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-[11px] text-taupe tracking-label-tight">
          ({count})
        </span>
      )}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={`half-${tone}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor={fillColor} />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

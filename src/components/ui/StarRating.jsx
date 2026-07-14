import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  value = 0,
  size = 14,
  className,
  showValue = false,
  reviewCount,
}) {
  const safe = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div
        className="inline-flex items-center gap-0.5 text-gold-deep"
        aria-label={`${safe.toFixed(1)} out of 5 stars`}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.4}
            className={cn(
              i < Math.round(safe) ? "fill-gold-deep" : "fill-transparent"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="font-sans text-[12px] text-mocha">
          {safe.toFixed(1)}
          {typeof reviewCount === "number" && (
            <span className="ml-1 text-mocha/70">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
}

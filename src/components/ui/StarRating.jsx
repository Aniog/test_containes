import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Compact star rating display.
 *   <StarRating value={4.8} count={86} />
 */
export default function StarRating({
  value = 0,
  count,
  size = 12,
  withCount = true,
  className,
}) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "full";
    if (i === full && hasHalf) return "half";
    return "empty";
  });

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5 text-gold-300" aria-hidden>
        {stars.map((kind, i) => (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star
              size={size}
              strokeWidth={1.5}
              className="text-taupe-light"
              fill="currentColor"
            />
            {(kind === "full" || kind === "half") && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: kind === "half" ? "50%" : "100%" }}
              >
                <Star
                  size={size}
                  strokeWidth={1.5}
                  className="text-gold-300"
                  fill="currentColor"
                />
              </span>
            )}
          </span>
        ))}
      </div>
      {withCount && typeof count === "number" && (
        <span className="text-[11px] uppercase tracking-widest2 text-espresso/60">
          ({count})
        </span>
      )}
      <span className="sr-only">{value} out of 5 stars</span>
    </div>
  );
}

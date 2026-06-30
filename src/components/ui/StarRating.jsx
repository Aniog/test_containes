import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  value = 0,
  count,
  size = 14,
  showValue = true,
  className = "",
}) {
  const safe = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="inline-flex items-center" aria-label={`${safe} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, safe - i));
          return (
            <span
              key={i}
              className="relative inline-block"
              style={{ width: size, height: size }}
              aria-hidden="true"
            >
              <Star
                size={size}
                strokeWidth={1.4}
                className="absolute inset-0 text-espresso-500/50"
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  size={size}
                  strokeWidth={1.4}
                  className="text-gold-400"
                  fill="currentColor"
                />
              </span>
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-[12px] tracking-wide text-espresso-500 font-sans">
          {safe.toFixed(1)}
          {typeof count === "number" && (
            <span className="ml-1">({count})</span>
          )}
        </span>
      )}
    </div>
  );
}

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({
  rating = 0,
  reviews,
  size = 14,
  className = "",
  showCount = true,
}) {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="inline-flex" aria-label={`Rated ${value} out of 5`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span
              key={i}
              className="relative inline-block"
              style={{ width: size, height: size }}
              aria-hidden="true"
            >
              <Star
                size={size}
                strokeWidth={1.2}
                className="absolute inset-0 text-onyx-800/30"
              />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  size={size}
                  strokeWidth={1.2}
                  className="text-gold-500"
                  fill="currentColor"
                />
              </span>
            </span>
          );
        })}
      </div>
      {showCount && (
        <span className="text-[11px] uppercase tracking-widest-2 text-mocha-500">
          {reviews ? `${reviews} reviews` : value ? value.toFixed(1) : ""}
        </span>
      )}
    </div>
  );
}

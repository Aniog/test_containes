import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

// Filled-star rating row used in cards, product page, testimonials.
export default function Stars({
  value = 0,
  size = 14,
  className = "",
  showValue = false,
}) {
  const safe = Math.max(0, Math.min(5, value));
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      aria-label={`Rated ${safe} out of 5`}
    >
      <span className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.4}
            className={cn(
              "transition-colors",
              i < Math.round(safe) ? "fill-gold text-gold" : "text-tan"
            )}
          />
        ))}
      </span>
      {showValue && (
        <span className="text-xs text-mauve font-medium tracking-wide price">
          {safe.toFixed(1)}
        </span>
      )}
    </span>
  );
}

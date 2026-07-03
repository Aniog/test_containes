import { Star } from "lucide-react";
import { cn } from "../../lib/cn.js";

export default function Rating({ value = 0, size = 14, className = "" }) {
  const filled = Math.round(value);
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Rated ${value} out of 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={
            i < filled
              ? "fill-gold-300 stroke-gold-300"
              : "fill-transparent stroke-ink-500"
          }
        />
      ))}
    </div>
  );
}

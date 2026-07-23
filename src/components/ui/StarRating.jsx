import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StarRating({ value = 5, size = 14, className, showValue = false }) {
  const stars = Math.round(value);
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={i < stars ? "fill-gold text-gold" : "text-gold/30"}
        />
      ))}
      {showValue && (
        <span className="ml-2 text-[11px] uppercase tracking-widest text-taupe font-sans">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}

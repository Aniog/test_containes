import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ value = 5, reviews, size = 14, className }) {
  const full = Math.round(value);
  return (
    <div className={cn("flex items-center gap-2 text-gold", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.25}
            className={i < full ? "fill-gold text-gold" : "text-gold/40"}
          />
        ))}
      </div>
      {typeof reviews === "number" && (
        <span className="font-sans text-xs tracking-wider text-taupe">
          {value.toFixed(1)} ({reviews})
        </span>
      )}
    </div>
  );
}

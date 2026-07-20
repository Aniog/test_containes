import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ value, size = "sm", className }) {
  const dim = size === "lg" ? "w-4 h-4" : "w-3 h-3";
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={cn(
            dim,
            i < Math.round(value) ? "fill-gold text-gold" : "fill-hairline text-hairline"
          )}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

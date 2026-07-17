import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({ value = 5, className, starClass = "h-3.5 w-3.5" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-bronze", className)}
      role="img"
      aria-label={`Rated ${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return <Star key={i} className={cn(starClass, "fill-bronze")} strokeWidth={1.5} />;
        }
        if (i === full && half) {
          return (
            <span key={i} className="relative inline-flex">
              <Star className={cn(starClass, "text-bronze/40")} strokeWidth={1.5} />
              <StarHalf
                className={cn(starClass, "absolute inset-0 fill-bronze text-bronze")}
                strokeWidth={1.5}
              />
            </span>
          );
        }
        return <Star key={i} className={cn(starClass, "text-bronze/40")} strokeWidth={1.5} />;
      })}
    </span>
  );
}

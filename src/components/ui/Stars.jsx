import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ rating = 5, className = "", size = 14 }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < Math.round(rating) ? "fill-gold text-gold" : "fill-sand text-sand"}
        />
      ))}
    </div>
  );
}

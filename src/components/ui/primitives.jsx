import React from "react";
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        "text-[11px] font-sans font-semibold uppercase tracking-widest2 text-gold",
        className
      )}
    >
      {children}
    </p>
  );
}

export function Stars({ rating = 5, className, size = 14 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-gold", className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <Star key={i} size={size} fill="currentColor" strokeWidth={0} />;
        if (i === full && half) return <StarHalf key={i} size={size} fill="currentColor" strokeWidth={0} />;
        return <Star key={i} size={size} className="text-stone" fill="currentColor" strokeWidth={0} />;
      })}
    </span>
  );
}

export function Hairline({ className }) {
  return <hr className={cn("border-0 border-t border-stone", className)} />;
}

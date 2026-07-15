import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={
            s <= Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-transparent text-divider"
          }
        />
      ))}
    </div>
  );
}

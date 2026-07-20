import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < full
              ? 'text-star fill-star'
              : i === full && partial >= 0.5
              ? 'text-star fill-star/50'
              : 'text-hairline'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.round(rating)
                ? 'fill-star-gold text-star-gold'
                : 'text-divider'
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-[11px] text-warm-gray">
          {rating} ({count} reviews)
        </span>
      )}
    </div>
  );
}

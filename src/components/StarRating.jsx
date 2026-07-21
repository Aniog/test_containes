import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 0, count = 0, size = 16 }) {
  const full = Math.floor(rating);
  const partial = rating - full;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star
              className="absolute text-border"
              size={size}
              strokeWidth={0}
              fill="currentColor"
            />
            {i < full && (
              <Star
                className="absolute text-gold"
                size={size}
                strokeWidth={0}
                fill="currentColor"
              />
            )}
            {i === full && partial > 0 && (
              <div className="absolute overflow-hidden" style={{ width: `${partial * 100}%` }}>
                <Star
                  className="text-gold"
                  size={size}
                  strokeWidth={0}
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {count > 0 && (
        <span className="font-sans text-xs text-stone-light">({count})</span>
      )}
    </div>
  );
}

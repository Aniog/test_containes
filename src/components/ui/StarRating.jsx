import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 0, size = 16 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = i < full ? 1 : i === full ? partial : 0;
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star size={size} className="text-velmora-border absolute inset-0" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="text-velmora-accent fill-velmora-accent" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, count }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="text-gold fill-gold" style={{ width: size, height: size }} />
      ))}
      {half && (
        <span className="relative" style={{ width: size, height: size }}>
          <Star className="text-stone absolute inset-0" style={{ width: size, height: size }} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: size / 2 }}>
            <Star className="text-gold fill-gold" style={{ width: size, height: size }} />
          </div>
        </span>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="text-stone" style={{ width: size, height: size }} />
      ))}
      {count != null && (
        <span className="ml-1.5 text-xs text-warmgray">({count})</span>
      )}
    </div>
  );
}

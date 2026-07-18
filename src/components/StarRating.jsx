import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="fill-gold text-gold" style={{ width: size, height: size }} />
      ))}
      {hasHalf && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star className="absolute text-border-dark" style={{ width: size, height: size }} />
          <div className="absolute overflow-hidden" style={{ width: size / 2, height: size }}>
            <Star className="fill-gold text-gold" style={{ width: size, height: size }} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="text-border-dark" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

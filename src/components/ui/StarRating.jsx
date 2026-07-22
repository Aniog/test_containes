import React from 'react';
import { Star } from 'lucide-react';

export function StarRating({ rating, size = 14, className = '' }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} size={size} className="fill-gold text-gold" />
      ))}
      {hasHalf && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star size={size} className="absolute text-stone" />
          <div className="absolute overflow-hidden" style={{ width: size / 2 }}>
            <Star size={size} className="fill-gold text-gold" />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} size={size} className="text-stone" />
      ))}
    </div>
  );
}

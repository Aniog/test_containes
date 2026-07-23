import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-gold text-gold"
        />
      ))}
      {hasHalf && (
        <span className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} className="absolute inset-0 text-warm-gray" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="fill-gold text-gold" />
          </span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-warm-gray" />
      ))}
    </div>
  );
}

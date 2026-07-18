import React from 'react';
import { Star } from 'lucide-react';

export function StarRating({ rating, size = 14, className = '' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((index) => {
        const filled = index <= Math.round(rating);
        return (
          <Star
            key={index}
            size={size}
            className={filled ? 'fill-gold text-gold' : 'text-ink-subtle'}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

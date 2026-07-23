import React from 'react';
import { Star } from 'lucide-react';

export default function Stars({ rating, className = '', starClass = 'w-3.5 h-3.5' }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${starClass} ${
            i <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-umber text-umber'
          }`}
        />
      ))}
    </div>
  );
}

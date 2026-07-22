import React from 'react';
import { Star } from 'lucide-react';

export default function Stars({ rating = 5, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-sand text-sand'
          }`}
        />
      ))}
    </span>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showValue = false }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const filled = i < fullStars || (i === fullStars && hasHalf);
        return (
          <Star
            key={i}
            className={filled ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            style={{ width: size, height: size }}
          />
        );
      })}
      {showValue && (
        <span className="text-xs text-velmora-muted ml-1">{rating}</span>
      )}
    </div>
  );
}

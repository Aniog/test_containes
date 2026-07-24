import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, count, size = 4 }) {
  const fullStars = Math.floor(rating || 0);
  const hasHalf = (rating || 0) - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-${size} h-${size} ${
              i < fullStars
                ? 'fill-accent-gold text-accent-gold'
                : i === fullStars && hasHalf
                ? 'fill-accent-gold/50 text-accent-gold'
                : 'fill-transparent text-border-light'
            }`}
          />
        ))}
      </div>
      {rating != null && (
        <span className="text-sm text-text-secondary">
          {rating.toFixed(1)}
          {count != null && ` (${count})`}
        </span>
      )}
    </div>
  );
}

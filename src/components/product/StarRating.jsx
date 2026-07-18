import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, count, size = 'sm' }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const sizeClass = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClass} ${
              i < fullStars
                ? 'fill-accent text-accent'
                : i === fullStars && hasHalf
                ? 'fill-accent/50 text-accent'
                : 'fill-none text-border'
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-muted">({count} reviews)</span>
      )}
    </div>
  );
}

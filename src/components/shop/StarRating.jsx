import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, reviewCount, size = 14 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(rating);
          return (
            <Star
              key={i}
              size={size}
              className={`${filled ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
            />
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-velmora-muted">({reviewCount})</span>
      )}
    </div>
  );
};

export default StarRating;

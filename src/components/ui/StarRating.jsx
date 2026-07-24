import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14, showValue = false, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const filled = i < fullStars || (i === fullStars && hasHalf);
          return (
            <Star
              key={i}
              size={size}
              className={`${
                filled ? 'fill-gold text-gold' : 'fill-transparent text-line'
              } ${hasHalf && i === fullStars ? 'half-star' : ''}`}
              strokeWidth={1.5}
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs text-stone font-sans">
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
};

export default StarRating;

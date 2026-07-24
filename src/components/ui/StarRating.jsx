import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, showNumber = false, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`star ${i < fullStars ? 'fill-current' : i === fullStars && hasHalfStar ? 'fill-current opacity-50' : ''}`} 
            size={size}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-xs text-[#6B645C] ml-1 tabular-nums">{rating}</span>
      )}
    </div>
  );
};

export default StarRating;

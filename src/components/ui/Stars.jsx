import React from 'react';
import { Star } from 'lucide-react';

const Stars = ({ rating, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  return (
    <div className="flex items-center" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = i < fullStars ? 1 : i === fullStars ? partial : 0;
        return (
          <div key={i} className="relative" style={{ width: size, height: size }}>
            <Star size={size} className="absolute text-stone-300" fill="currentColor" />
            {fill > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star size={size} className="text-gold-500" fill="currentColor" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stars;

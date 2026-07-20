import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating)
            ? 'fill-velmora-gold text-velmora-gold'
            : 'fill-transparent text-velmora-borderDark'
          }
        />
      ))}
    </div>
  );
};

export default StarRating;

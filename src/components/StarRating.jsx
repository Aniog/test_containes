import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14 }) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < full
              ? 'fill-velmora-gold text-velmora-gold'
              : i === full && hasHalf
              ? 'fill-velmora-gold/50 text-velmora-gold'
              : 'fill-transparent text-velmora-taupe'
          }
        />
      ))}
    </div>
  );
};

export default StarRating;

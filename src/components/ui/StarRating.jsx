import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14, showNumber = false }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} size={size} className="fill-velmora-gold text-velmora-gold" />;
          } else if (i === fullStars && hasHalf) {
            return <Star key={i} size={size} className="fill-velmora-gold/50 text-velmora-gold" />;
          }
          return <Star key={i} size={size} className="text-velmora-border" />;
        })}
      </div>
      {showNumber && (
        <span className="text-xs text-velmora-text-muted ml-1">{rating}</span>
      )}
    </div>
  );
};

export default StarRating;

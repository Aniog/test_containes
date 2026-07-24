import React from 'react';
import { Star } from 'lucide-react';

const Stars = ({ rating = 5, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => {
        const fill = i < fullStars ? 'fill-amber-400 text-amber-400' : 'fill-transparent text-stone-300';
        return <Star key={i} size={size} className={fill} />;
      })}
    </div>
  );
};

export default Stars;

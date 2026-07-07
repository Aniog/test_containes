import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'text-velmora-gold fill-velmora-gold'
                : i < rating
                ? 'text-velmora-gold fill-velmora-gold/50'
                : 'text-velmora-mist fill-velmora-mist'
            }`}
          />
        ))}
      </div>
      {reviews && (
        <span className="text-sm text-velmora-graphite ml-2">
          {rating} ({reviews} reviews)
        </span>
      )}
    </div>
  );
};

export default StarRating;

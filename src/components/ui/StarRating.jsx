import React from 'react';

const StarRating = ({ rating, showNumber = false, size = 'default' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1">
      <div className="stars text-[#B89778]">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="inline-block">★</span>
        ))}
        {hasHalf && <span className="inline-block">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="inline-block text-[#D9D2C7]">★</span>
        ))}
      </div>
      {showNumber && (
        <span className="text-xs text-[#6B645C] ml-1">{rating}</span>
      )}
    </div>
  );
};

export default StarRating;
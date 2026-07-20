import React from 'react';

const StarRating = ({ rating, showNumber = false, size = 'sm' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <div className={`flex items-center gap-1 ${sizeClass}`}>
      <span className="stars">
        {'★'.repeat(fullStars)}
        {hasHalf && '½'}
        {'☆'.repeat(5 - Math.ceil(rating))}
      </span>
      {showNumber && (
        <span className="text-[var(--velmora-taupe)] ml-1 font-sans text-xs">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;

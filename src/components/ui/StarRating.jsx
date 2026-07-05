import React from 'react';

const StarRating = ({ rating, showNumber = false, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1.5">
      <div className="stars" style={{ fontSize: size }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className="star">
            {i < fullStars ? '★' : (i === fullStars && hasHalfStar ? '☆' : '☆')}
          </span>
        ))}
      </div>
      {showNumber && (
        <span className="text-xs text-[#5C5752] tabular-nums">{rating}</span>
      )}
    </div>
  );
};

export default StarRating;

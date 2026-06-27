import React from 'react';

const StarRating = ({ rating, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-0.5 text-[#C5A46E]">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} style={{ fontSize: size }}>★</span>
      ))}
      {hasHalf && <span style={{ fontSize: size }}>☆</span>}
      <span className="ml-1.5 text-xs text-[#6B665F] tabular-nums">{rating}</span>
    </div>
  );
};

export default StarRating;
import React from 'react';

const StarRating = ({ rating, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  return (
    <div className="stars" style={{ fontSize: size }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
      {hasHalf && <span className="star">☆</span>}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#D4C9B8' }}>★</span>
      ))}
    </div>
  );
};

export default StarRating;

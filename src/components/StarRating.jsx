import React from 'react';

const StarRating = ({ rating, size = 14 }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="stars">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`} className="star" style={{ fontSize: size }}>★</span>
      ))}
      {hasHalf && (
        <span className="star" style={{ fontSize: size, opacity: 0.5 }}>★</span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} style={{ fontSize: size, color: '#E5DFD6' }}>★</span>
      ))}
    </div>
  );
};

export default StarRating;

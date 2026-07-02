import React from 'react';

function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="star" style={{ fontSize: size }}>
          {i < fullStars ? '★' : (i === fullStars && hasHalf ? '★' : '☆')}
        </span>
      ))}
    </div>
  );
}

export default StarRating;

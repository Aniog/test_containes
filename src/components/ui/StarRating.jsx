import React from 'react';

export default function StarRating({ rating, maxRating = 5, size = 'md', showCount = false, count = 0 }) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const starSizes = sizes[size] || sizes.md;

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const fillPercentage = Math.min(1, Math.max(0, rating - index));
        const isFull = fillPercentage >= 1;
        const isHalf = fillPercentage > 0 && fillPercentage < 1;

        return (
          <div key={index} className={`relative ${starSizes}`}>
            {/* Background star (empty) */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 text-gold/20"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Filled star or partial fill */}
            {isFull && (
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 text-gold"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            )}
            {isHalf && (
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 text-gold"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z" />
              </svg>
            )}
          </div>
        );
      })}
      {showCount && count > 0 && (
        <span className="ml-1 text-xs text-stone">({count})</span>
      )}
    </div>
  );
}

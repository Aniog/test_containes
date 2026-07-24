import React from "react";

export default function Stars({ rating = 5, size = 14, className = "" }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  return (
    <div className={`flex items-center gap-0.5 text-gold ${className}`} aria-label={`Rated ${rating} out of 5`}>
      {stars.map((on, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={on ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 2.5l2.93 6.36 7.07.65-5.36 4.6 1.6 6.89L12 17.6l-6.24 3.4 1.6-6.89-5.36-4.6 7.07-.65L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

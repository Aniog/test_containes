import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, reviews, size = 'md', dark = false, centered = false }) {
  const px = size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5';
  return (
    <div
      className={`flex items-center gap-1.5 ${centered ? 'justify-center md:justify-start' : ''}`}
      aria-label={`Rated ${rating} out of 5`}
    >
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`${px} ${
              i <= Math.round(rating)
                ? 'fill-gold text-gold'
                : dark
                  ? 'fill-ivory/20 text-ivory/20'
                  : 'fill-linen text-linen'
            }`}
            strokeWidth={1}
          />
        ))}
      </div>
      {typeof reviews === 'number' && (
        <span className={`text-[11px] tracking-wide ${dark ? 'text-ivory/60' : 'text-taupe'}`}>
          {rating.toFixed(1)} ({reviews})
        </span>
      )}
    </div>
  );
}

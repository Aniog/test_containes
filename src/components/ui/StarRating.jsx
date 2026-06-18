import React from 'react';
import { Star } from 'lucide-react';
import { clsx } from 'clsx';

// Renders a 5-star rating. `value` is 0–5.
export default function StarRating({ value = 5, size = 14, className }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={clsx('inline-flex items-center gap-0.5', className)}>
      {stars.map((s) => {
        const filled = value >= s - 0.25;
        return (
          <Star
            key={s}
            size={size}
            strokeWidth={1.5}
            className={clsx(
              'transition-colors',
              filled ? 'fill-gold text-gold' : 'fill-transparent text-hairline',
            )}
          />
        );
      })}
    </div>
  );
}

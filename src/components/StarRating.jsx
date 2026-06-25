import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function StarRating({ value = 5, size = 14, className, showValue = false, reviews }) {
  const full = Math.floor(value);
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className={cn('inline-flex items-center gap-1', className)}>
      <div className="inline-flex items-center gap-[2px]">
        {stars.map((i) => (
          <Star
            key={i}
            size={size}
            className={cn(
              'transition-colors',
              i < full ? 'fill-champagne text-champagne' : 'text-champagne/30'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-[11px] tracking-wider text-mocha">
          {value.toFixed(1)}
          {typeof reviews === 'number' && ` · ${reviews} reviews`}
        </span>
      )}
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, count, showCount = true, size = 'sm', className }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
  };

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= Math.round(rating)
                ? 'fill-brand-star text-brand-star'
                : 'fill-none text-brand-light-gray'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-brand-warm-gray">({count})</span>
      )}
    </div>
  );
}

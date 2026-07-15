import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating);
        return (
          <Star
            key={i}
            className={cn(
              'fill-current',
              filled ? 'text-gold' : 'text-hairline'
            )}
            size={size}
          />
        );
      })}
    </div>
  );
}

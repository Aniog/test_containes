import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, reviews, size = 'sm', className = '' }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex items-center gap-0.5">
        {stars.map((filled, i) => (
          <Star
            key={i}
            className={cn(
              size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4',
              filled ? 'fill-amber text-amber' : 'fill-border text-border'
            )}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-muted font-sans">
          ({reviews})
        </span>
      )}
    </div>
  );
}

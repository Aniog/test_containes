import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, className, showCount = true }) {
  return (
    <div className={cn('flex items-center gap-1.5 text-accent', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'w-3.5 h-3.5',
              star <= Math.round(rating) ? 'fill-current' : 'text-border-strong'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-muted-foreground font-sans tracking-wide">
          ({count})
        </span>
      )}
    </div>
  );
}

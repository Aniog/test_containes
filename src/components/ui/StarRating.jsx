import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              star <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'fill-velmora-sand text-velmora-sand'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe ml-1">({count})</span>
      )}
    </div>
  );
}

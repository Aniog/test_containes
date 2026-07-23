import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              'fill-current',
              star <= Math.round(rating) ? 'text-gold' : 'text-hairline'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-taupe">({count})</span>
      )}
    </div>
  );
}

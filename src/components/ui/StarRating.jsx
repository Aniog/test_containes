import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, className, showCount = true }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              'w-3.5 h-3.5',
              star <= Math.round(rating) ? 'fill-gold text-gold' : 'text-taupe'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-warm-gray">({count})</span>
      )}
    </div>
  );
}

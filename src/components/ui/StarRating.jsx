import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, className, showCount = true }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.round(rating);
          return (
            <Star
              key={star}
              className={cn(
                'h-3.5 w-3.5',
                filled ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-warm-gray'
              )}
            />
          );
        })}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count})</span>
      )}
    </div>
  );
}

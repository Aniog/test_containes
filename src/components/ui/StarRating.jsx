import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, size = 14, className }) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              star <= Math.round(rating) ? 'fill-accent text-accent' : 'text-hairline'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-muted font-sans">({count})</span>
      )}
    </div>
  );
}

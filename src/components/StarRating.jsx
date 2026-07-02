import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, size = 14, className, showValue = false, reviewCount }) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.round(rating);
          return (
            <Star
              key={star}
              size={size}
              className={cn(
                'transition-colors',
                filled ? 'fill-gold text-gold' : 'fill-transparent text-hairline'
              )}
              aria-hidden="true"
            />
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs text-taupe ml-1">
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}

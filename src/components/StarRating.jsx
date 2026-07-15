import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, size = 14, className, showValue = false }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(
            'fill-current',
            star <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-stone'
          )}
        />
      ))}
      {showValue && (
        <span className="ml-1.5 text-xs font-medium text-velmora-warm-gray">{rating}</span>
      )}
    </div>
  );
}

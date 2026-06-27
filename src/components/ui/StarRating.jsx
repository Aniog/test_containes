import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={cn(
              'fill-current',
              filled ? 'text-velmora-gold' : 'text-velmora-espresso/15'
            )}
          />
        );
      })}
    </span>
  );
}

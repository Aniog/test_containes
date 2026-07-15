import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating);
        return (
          <Star
            key={star}
            size={size}
            className={cn(
              'shrink-0',
              filled ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'
            )}
          />
        );
      })}
    </div>
  );
}

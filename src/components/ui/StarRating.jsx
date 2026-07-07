import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

export function StarRating({ rating, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < Math.floor(rating)
              ? 'fill-gold-400 text-gold-400'
              : i < rating
              ? 'fill-gold-400/50 text-gold-400'
              : 'fill-charcoal-200 text-charcoal-200'
          )}
        />
      ))}
    </div>
  );
}

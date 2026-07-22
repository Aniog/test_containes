import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, size = 'sm', showCount = false, count = 0 }) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            sizes[size],
            star <= Math.round(rating)
              ? 'fill-brand-gold text-brand-gold'
              : 'fill-transparent text-brand-text-tertiary'
          )}
        />
      ))}
      {showCount && (
        <span className="ml-1 text-xs text-brand-text-secondary">
          ({count})
        </span>
      )}
    </div>
  );
}

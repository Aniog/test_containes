import { clsx } from 'clsx';
import { Star } from 'lucide-react';

export function StarRating({ rating, size = 'sm', showCount = true, reviewCount }) {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={clsx(
            sizeClasses[size],
            star <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-hairline text-hairline'
          )}
        />
      ))}
      {showCount && reviewCount !== undefined && (
        <span className="ml-1 text-xs text-stone">({reviewCount})</span>
      )}
    </div>
  );
}

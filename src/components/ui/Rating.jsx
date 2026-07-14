import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

function Rating({ rating, reviewCount, showCount = true, size = 'default' }) {
  const sizes = {
    sm: 'w-3 h-3',
    default: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizes[size],
              star <= Math.round(rating)
                ? 'fill-accent text-accent'
                : 'fill-transparent text-border'
            )}
          />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-sm text-text-secondary ml-1">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}

export default Rating;

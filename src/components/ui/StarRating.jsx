import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarRating = ({ 
  rating, 
  reviewCount, 
  size = 'default',
  showCount = true,
  className 
}) => {
  const sizes = {
    sm: 'w-3 h-3',
    default: 'w-4 h-4',
    lg: 'w-5 h-5'
  };
  
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              sizes[size],
              i < Math.floor(rating) 
                ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' 
                : 'text-[var(--color-text-muted)]'
            )}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-[var(--color-text-muted)] ml-1">
          ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default StarRating;

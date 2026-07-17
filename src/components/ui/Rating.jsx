import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Rating = ({ rating, reviewCount, showCount = true, size = 'md' }) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < Math.floor(rating);
      const partial = !filled && index < rating;
      
      return (
        <Star
          key={index}
          className={cn(
            sizes[size],
            filled ? 'fill-[var(--color-accent)] text-[var(--color-accent)]' : 
            partial ? 'fill-[var(--color-accent)]/50 text-[var(--color-accent)]' :
            'text-[var(--color-border)]'
          )}
        />
      );
    });
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {renderStars()}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-sm text-[var(--color-secondary)] ml-1">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;

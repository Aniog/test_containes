import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarRating = ({ rating, count, size = 16 }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              'transition-colors',
              star <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-hairline'
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe">({count} reviews)</span>
      )}
    </div>
  );
};

export default StarRating;

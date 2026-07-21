import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, reviewCount, size = 'sm', showCount = true }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              sizeClasses[size],
              star <= rating ? 'fill-gold text-gold' : 'fill-silk text-silk'
            )}
          />
        ))}
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-sm text-cocoa ml-1">({reviewCount})</span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Rating({ rating = 4.5, count, size = 14, showCount = true }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="fill-gold text-gold"
            aria-hidden="true"
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={size} className="text-muted-gold" aria-hidden="true" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={size} className="fill-gold text-gold" aria-hidden="true" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={size}
            className="text-muted-gold"
            aria-hidden="true"
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-taupe ml-1">
          ({count})
        </span>
      )}
    </div>
  );
}

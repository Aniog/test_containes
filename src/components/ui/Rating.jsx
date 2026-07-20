import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Rating = ({ rating, reviews, showCount = true, size = 'default' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizes = {
    sm: 'w-3 h-3',
    default: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={cn('fill-gold text-gold', sizes[size])} />
        ))}
        {hasHalf && (
          <div className="relative">
            <Star className={cn('text-border', sizes[size])} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={cn('fill-gold text-gold', sizes[size])} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={cn('text-border', sizes[size])} />
        ))}
      </div>
      {showCount && (
        <span className="text-xs text-warmGray font-sans ml-1">
          ({reviews})
        </span>
      )}
    </div>
  );
};

export default Rating;

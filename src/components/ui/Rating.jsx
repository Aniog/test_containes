import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const Rating = ({ rating, reviewCount, size = 'sm' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeClasses[size], 'fill-velmora-gold text-velmora-gold')}
          />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(sizeClasses[size], 'text-velmora-sand')} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={cn(sizeClasses[size], 'fill-velmora-gold text-velmora-gold')} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeClasses[size], 'text-velmora-sand')}
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-velmora-warm-gray ml-1">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;

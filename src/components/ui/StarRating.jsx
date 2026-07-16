import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarRating = ({ rating, size = 16, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={size} className="fill-[#C5A46E] text-[#C5A46E]" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star size={size} className="text-[#EDE9E3]" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="fill-[#C5A46E] text-[#C5A46E]" />
          </div>
        </div>
      )}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-[#EDE9E3]" />
      ))}
    </div>
  );
};

export default StarRating;

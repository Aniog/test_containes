import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Rating({ rating, reviewCount, size = 'sm' }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn('fill-gold text-gold', sizeClasses[size])} />
      ))}
      {hasHalf && (
        <div className="relative">
          <Star className={cn('text-border', sizeClasses[size])} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={cn('fill-gold text-gold', sizeClasses[size])} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn('text-border', sizeClasses[size])} />
      ))}
      {reviewCount !== undefined && (
        <span className="ml-1.5 text-sm text-muted">({reviewCount})</span>
      )}
    </div>
  );
}

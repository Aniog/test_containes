import { Star } from 'lucide-react';
import { generateStars } from '@/lib/utils';

export default function StarRating({ rating, showCount, count }) {
  const { full, hasHalf, empty } = generateStars(rating);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`full-${i}`} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
        {hasHalf && (
          <div className="relative w-3.5 h-3.5">
            <Star className="absolute w-3.5 h-3.5 text-champagne" />
            <div className="absolute overflow-hidden w-[50%] h-full">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            </div>
          </div>
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-3.5 h-3.5 text-champagne" />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-warm-gray ml-1">({count})</span>
      )}
    </div>
  );
}

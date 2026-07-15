import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={cn(
              'w-[14px] h-[14px]',
              i <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-border'
            )}
            size={size}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-stone ml-1">({count})</span>
      )}
    </div>
  );
}

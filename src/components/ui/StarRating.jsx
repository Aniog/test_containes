import { Star } from 'lucide-react';

export function StarRating({ rating, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={size}
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
            stroke={i <= Math.round(rating) ? '#C9A96E' : '#D4C9B8'}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="font-inter text-xs text-velmora-ash">({count})</span>
      )}
    </div>
  );
}

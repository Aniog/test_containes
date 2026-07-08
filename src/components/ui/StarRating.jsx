import { Star } from 'lucide-react';

export function StarRating({ rating, count, size = 11, showNumber = false }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={0}
            style={{ fill: i < Math.floor(rating) ? '#c9a96e' : '#e8d5b0' }}
          />
        ))}
      </div>
      {showNumber && (
        <span className="font-sans text-xs text-velmora-stone">{rating}</span>
      )}
      {count !== undefined && (
        <span className="font-sans text-[10px] text-velmora-stone">
          ({count}{showNumber ? ' reviews' : ''})
        </span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';

export default function StarRating({ rating, count, size = 'sm' }) {
  const starSize = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={starSize}
          style={{
            fill: i < Math.floor(rating) ? '#C9A96E' : '#E8E0D5',
            color: i < Math.floor(rating) ? '#C9A96E' : '#E8E0D5',
          }}
        />
      ))}
      {count !== undefined && (
        <span className="font-inter text-[10px] text-warm-gray ml-1">({count})</span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';

export default function StarRating({ rating, reviewCount, size = 12 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < Math.floor(rating) ? '#C9A96E' : 'none'}
          stroke={i < Math.floor(rating) ? '#C9A96E' : '#8C8278'}
          strokeWidth={1.5}
        />
      ))}
      {reviewCount !== undefined && (
        <span className="font-sans text-[10px] text-stone ml-1">({reviewCount})</span>
      )}
    </div>
  );
}

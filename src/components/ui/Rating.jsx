import { Star } from 'lucide-react';

export function Rating({ value, count, size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(value) ? 'fill-gold text-gold' : 'text-warmGray-200'}
        />
      ))}
      {count !== undefined && (
        <span className="ml-1 text-xs text-warmGray-500 font-sans">
          ({count})
        </span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';

export default function StarRating({ rating, count, showCount = true }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            className={star <= Math.round(rating) ? 'fill-gold text-gold' : 'fill-none text-warmgray'}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-taupe">({count})</span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';

export function StarRating({ rating, reviews, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={i <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-transparent text-sand'
            }
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-taupe font-sans">({reviews})</span>
      )}
    </div>
  );
}

import { Star } from 'lucide-react';

export function StarRating({ rating, size = 14 }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? 'fill-gold text-gold' : 'text-taupe'}
            strokeWidth={1.5}
          />
        );
      })}
    </span>
  );
}

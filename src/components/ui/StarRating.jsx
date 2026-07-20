import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => {
        const isFilled = i < fullStars || (i === fullStars && hasHalf);
        return (
          <Star
            key={i}
            size={size}
            className={isFilled ? 'fill-accent text-accent' : 'text-subtle'}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

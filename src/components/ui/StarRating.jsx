import { Star } from 'lucide-react';

export function StarRating({ rating = 0, size = 'sm' }) {
  const stars = [1, 2, 3, 4, 5];
  const dims = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };

  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {stars.map((star) => (
        <Star
          key={star}
          className={`${dims[size]} ${
            star <= Math.round(rating)
              ? 'text-vel-star fill-vel-star'
              : 'text-vel-border'
          }`}
        />
      ))}
    </span>
  );
}

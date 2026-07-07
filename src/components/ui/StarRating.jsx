import { Star, StarHalf } from 'lucide-react';

export function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center text-velmora-gold" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={size} fill="currentColor" strokeWidth={0} />
      ))}
      {hasHalf && <StarHalf size={size} fill="currentColor" strokeWidth={0} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-velmora-taupe" strokeWidth={1.5} />
      ))}
    </span>
  );
}

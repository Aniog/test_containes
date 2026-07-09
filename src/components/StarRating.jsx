import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showValue = false, reviewCount }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={size} className="fill-velmora-gold text-velmora-gold" />
        ))}
        {hasHalf && (
          <Star size={size} className="fill-velmora-gold/50 text-velmora-gold" />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-velmora-border" />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-velmora-gray ml-1">
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}
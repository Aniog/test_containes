import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showCount, count }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={size} fill="#b8963e" className="text-velmora-gold" />
      ))}
      {hasHalf && (
        <div className="relative">
          <Star size={size} className="text-velmora-sand" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={size} fill="#b8963e" className="text-velmora-gold" />
          </div>
        </div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-velmora-sand" />
      ))}
      {showCount && count !== undefined && (
        <span className="text-body-sm text-velmora-warm-gray ml-1">({count})</span>
      )}
    </div>
  );
}

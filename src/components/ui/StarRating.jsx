import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, size = 14, showCount, count }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < fullStars
                ? 'text-gold-600 fill-gold-600'
                : i === fullStars && hasHalf
                ? 'text-gold-600 fill-gold-600/50'
                : 'text-cream-400'
            }
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="font-sans text-xs text-walnut-400 ml-1">({count})</span>
      )}
    </div>
  );
}

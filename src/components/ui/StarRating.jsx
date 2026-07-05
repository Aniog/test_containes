import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, count, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= Math.round(rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'fill-none text-velmora-sand'
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-velmora-taupe font-sans">({count})</span>
      )}
    </div>
  );
}

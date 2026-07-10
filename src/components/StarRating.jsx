import { Star } from 'lucide-react';

export default function StarRating({ rating, count }) {
  const full = Math.floor(rating);
  const partial = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < full
                ? 'fill-gold text-gold'
                : i === full && partial
                ? 'fill-gold/50 text-gold'
                : 'fill-none text-divider'
            }
          />
        ))}
      </div>
      {count != null && (
        <span className="text-xs text-lightgray">({count})</span>
      )}
    </div>
  );
}

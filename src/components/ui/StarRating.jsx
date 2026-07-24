import { Star } from 'lucide-react';

export default function StarRating({ value = 0, size = 12, showCount = false, count }) {
  const stars = Math.round(value);
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-[12px] h-[12px]"
            strokeWidth={1.4}
            fill={i < stars ? 'currentColor' : 'none'}
          />
        ))}
      </span>
      {showCount && typeof count === 'number' && (
        <span className="text-[11px] text-muted">({count})</span>
      )}
    </span>
  );
}

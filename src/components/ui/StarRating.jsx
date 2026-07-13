import { Star } from 'lucide-react';

export default function StarRating({ rating, count, size = 14 }) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            style={{
              fill: i < full ? '#C9A96E' : '#EDE8E1',
              color: i < full ? '#C9A96E' : '#EDE8E1',
            }}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="font-sans text-xs text-taupe">({count})</span>
      )}
    </div>
  );
}

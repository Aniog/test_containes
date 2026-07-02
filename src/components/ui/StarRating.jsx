import { Star } from 'lucide-react';

export function StarRating({ rating, max = 5, size = 12 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={size}
          style={{
            fill: i < Math.floor(rating) ? '#C9A96E' : '#EDE8E1',
            color: i < Math.floor(rating) ? '#C9A96E' : '#EDE8E1',
          }}
        />
      ))}
    </div>
  );
}

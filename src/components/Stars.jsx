import { Star } from 'lucide-react';

export default function Stars({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${i <= Math.round(rating) ? 'fill-gold-500 text-gold-500' : 'text-warmgray'}`}
          style={{ width: size, height: size }}
          strokeWidth={1.6}
        />
      ))}
    </div>
  );
}

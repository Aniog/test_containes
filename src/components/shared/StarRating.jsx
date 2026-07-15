import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={
            n <= Math.round(rating)
              ? 'fill-velmora-gold text-velmora-gold'
              : 'text-velmora-border fill-transparent'
          }
        />
      ))}
    </div>
  );
}

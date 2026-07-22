import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(rating)
              ? 'fill-warm-gold text-warm-gold'
              : 'fill-transparent text-sand'
          }
        />
      ))}
    </div>
  );
}

import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && hasHalf;
        return (
          <Star
            key={i}
            size={size}
            className={`${
              isFull || isHalf
                ? 'fill-velmora-gold text-velmora-gold'
                : 'fill-transparent text-velmora-stone-light'
            } transition-colors`}
            style={{
              clipPath: isHalf ? 'inset(0 50% 0 0)' : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

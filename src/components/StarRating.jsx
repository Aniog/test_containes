import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-[${size}px] h-[${size}px] ${
            i <= Math.round(rating)
              ? 'text-gold-500 fill-gold-500'
              : 'text-charcoal-200'
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

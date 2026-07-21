import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <Star
          key={i}
          size={size}
          fill="#C4953A"
          stroke="none"
          className="text-velmora-gold"
        />
      );
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(
        <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} fill="none" stroke="#D6CFC6" strokeWidth={1.5} className="absolute inset-0" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${(rating - Math.floor(rating)) * 100}%` }}>
            <Star size={size} fill="#C4953A" stroke="none" />
          </span>
        </span>
      );
    } else {
      stars.push(
        <Star
          key={i}
          size={size}
          fill="none"
          stroke="#D6CFC6"
          strokeWidth={1.5}
        />
      );
    }
  }
  return <span className="inline-flex items-center gap-0.5">{stars}</span>;
}

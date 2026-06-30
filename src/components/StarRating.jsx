import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star
          key={i}
          size={size}
          className="fill-gold text-gold"
        />
      );
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
          <Star size={size} className="absolute text-divider" />
          <span className="absolute overflow-hidden" style={{ width: size / 2 }}>
            <Star size={size} className="fill-gold text-gold" />
          </span>
        </span>
      );
    } else {
      stars.push(
        <Star
          key={i}
          size={size}
          className="text-divider"
        />
      );
    }
  }

  return <div className="flex items-center gap-0.5">{stars}</div>;
}

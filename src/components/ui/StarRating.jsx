import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14, showCount = true, count = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  return (
    <div className="flex items-center gap-1">
      {stars.map((filled, i) => (
        <Star
          key={i}
          size={size}
          className={filled ? 'fill-gold text-gold' : 'text-hairline'}
        />
      ))}
      {showCount && count > 0 && (
        <span className="ml-1 text-xs text-warm-gray">({count})</span>
      )}
    </div>
  );
};

export default StarRating;

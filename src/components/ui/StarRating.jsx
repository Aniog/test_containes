import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showValue = false, reviewCount }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={
              star <= Math.round(rating)
                ? 'fill-gold text-gold'
                : 'fill-linen text-linen'
            }
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-muted font-sans">
          {rating.toFixed(1)}
          {reviewCount !== undefined && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
}

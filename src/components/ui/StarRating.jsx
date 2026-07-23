import { Star } from 'lucide-react';

export default function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-3.5 h-3.5"
            fill={star <= Math.round(rating) ? 'var(--velmora-star)' : 'none'}
            style={{ color: star <= Math.round(rating) ? 'var(--velmora-star)' : 'var(--velmora-border)' }}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs" style={{ color: 'var(--velmora-text-muted)' }}>
          ({reviews})
        </span>
      )}
    </div>
  );
}

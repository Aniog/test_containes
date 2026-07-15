import { Star } from 'lucide-react';

export default function StarRating({ rating, reviews, size = 'sm' }) {
  const sizeClasses = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses} ${
              i < fullStars
                ? 'fill-champagne text-champagne'
                : i === fullStars && hasHalfStar
                ? 'fill-champagne/50 text-champagne'
                : 'fill-velvet-200 text-velvet-200'
            }`}
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-velvet-600 font-sans">
          {rating} ({reviews})
        </span>
      )}
    </div>
  );
}

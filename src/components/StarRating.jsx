import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-velmora-gold text-velmora-gold"
        />
      ))}
      {hasHalf && (
        <span className="relative" style={{ width: size, height: size }}>
          <Star
            size={size}
            className="absolute inset-0 text-velmora-linen"
          />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${size / 2}px` }}>
            <Star
              size={size}
              className="fill-velmora-gold text-velmora-gold"
            />
          </span>
        </span>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-velmora-linen"
        />
      ))}
    </span>
  );
}

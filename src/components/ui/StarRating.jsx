import React from 'react';
import { Star, StarHalf } from 'lucide-react';

export default function StarRating({ rating, size = 14, className = '' }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} size={size} className="fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
      ))}
      {hasHalf && (
        <StarHalf size={size} className="fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
      )}
      {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-[var(--velmora-border)]" />
      ))}
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 0, size = 14 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const empty = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="text-[var(--gold)] fill-[var(--gold)]" style={{ width: size, height: size }} />
      ))}
      {partial > 0 && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star className="text-[var(--cream-dark)] fill-[var(--cream-dark)] absolute" style={{ width: size, height: size }} />
          <div className="overflow-hidden absolute" style={{ width: `${partial * 100}%` }}>
            <Star className="text-[var(--gold)] fill-[var(--gold)]" style={{ width: size, height: size }} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className="text-[var(--cream-dark)]" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

import React from 'react';
import { Star } from 'lucide-react';

const sizeMap = {
  3: 'w-3 h-3',
  4: 'w-4 h-4',
  5: 'w-5 h-5',
};

export default function StarRating({ rating, size = 4 }) {
  const cls = sizeMap[size] || 'w-4 h-4';
  const full = Math.floor(rating);
  const partial = rating - full;
  const empty = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className={`${cls} fill-velmora-gold text-velmora-gold`} />
      ))}
      {partial > 0 && (
        <div className="relative">
          <Star className={`${cls} text-velmora-warm`} />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partial * 100}%` }}
          >
            <Star className={`${cls} fill-velmora-gold text-velmora-gold`} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} className={`${cls} text-velmora-warm`} />
      ))}
    </div>
  );
}

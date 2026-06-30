import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const empty = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} className="fill-accent text-accent" style={{ width: size, height: size }} />
      ))}
      {partial > 0 && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star className="absolute text-hairline fill-hairline" style={{ width: size, height: size }} />
          <div className="absolute overflow-hidden" style={{ width: `${partial * 100}%` }}>
            <Star className="fill-accent text-accent" style={{ width: size, height: size }} />
          </div>
        </div>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="text-hairline" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

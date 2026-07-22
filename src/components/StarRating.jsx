import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} size={size} className="fill-accent text-accent" />
      ))}
      {half && (
        <Star key="h" size={size} className="fill-accent/50 text-accent" />
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} size={size} className="text-hairline" />
      ))}
    </div>
  );
}

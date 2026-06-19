import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 'sm' }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(full)].map((_, i) => (
        <Star key={`full-${i}`} className={`${iconSize} fill-accent text-accent`} />
      ))}
      {half && (
        <div className="relative">
          <Star className={`${iconSize} text-border`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${iconSize} fill-accent text-accent`} />
          </div>
        </div>
      )}
      {[...Array(empty)].map((_, i) => (
        <Star key={`empty-${i}`} className={`${iconSize} text-border`} />
      ))}
    </div>
  );
}

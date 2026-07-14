import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 'sm' }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClass = size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5';

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`${sizeClass} fill-[#C4A962] text-[#C4A962]`}
        />
      ))}
      {hasHalf && (
        <div className="relative">
          <Star className={`${sizeClass} text-[#E7E5E4]`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${sizeClass} fill-[#C4A962] text-[#C4A962]`} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className={`${sizeClass} text-[#E7E5E4]`}
        />
      ))}
    </div>
  );
}

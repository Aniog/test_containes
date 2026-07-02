import { Star } from 'lucide-react';

export default function StarRating({ rating, count, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${sizeClass} ${
              i < Math.floor(rating) ? 'text-gold fill-gold' : 'text-white/10'
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-subtle text-xs font-sans">({count} reviews)</span>
      )}
    </div>
  );
}

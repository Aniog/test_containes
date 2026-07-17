import { cn } from '@/lib/utils';

export default function Rating({ rating, reviews, showCount = true, size = 'md' }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating);
    const half = !filled && i < rating;
    return { filled, half };
  });

  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {stars.map((star, i) => (
          <svg
            key={i}
            className={cn(sizeClasses[size], star.filled ? 'text-gold' : 'text-champagne')}
            viewBox="0 0 24 24"
            fill={star.filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            {star.half ? (
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#E8DFD0" />
                </linearGradient>
              </defs>
            ) : null}
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={star.half ? `url(#half-${i})` : star.filled ? 'currentColor' : 'none'}
            />
          </svg>
        ))}
      </div>
      {showCount && reviews !== undefined && (
        <span className="text-sm text-stone">({reviews})</span>
      )}
    </div>
  );
}

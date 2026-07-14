import { Star } from 'lucide-react';
import { clsx } from 'clsx';

export function Rating({ value, max = 5, size = 14, showValue = false, className }) {
  const stars = Array.from({ length: max }, (_, i) => i < value);
  
  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <div className="flex">
        {stars.map((filled, i) => (
          <Star
            key={i}
            size={size}
            className={clsx(
              filled ? 'fill-champagne text-champagne' : 'fill-warm-gray-100 text-warm-gray-100'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="ml-1 text-xs text-warm-gray-600">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export default Rating;

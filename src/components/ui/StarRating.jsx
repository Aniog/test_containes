import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 14, showValue = false }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars;
          const isHalf = i === fullStars && hasHalf;
          return (
            <div key={i} className="relative">
              <Star
                size={size}
                className="text-velmora-taupe"
                strokeWidth={1.5}
              />
              {(isFilled || isHalf) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: isHalf ? '50%' : '100%' }}
                >
                  <Star
                    size={size}
                    className="fill-velmora-gold text-velmora-gold"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showValue && (
        <span className="text-xs text-velmora-warm-gray ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

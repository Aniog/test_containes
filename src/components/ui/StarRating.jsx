import { Star } from 'lucide-react';

const StarRating = ({ rating, showCount = false, count = 0, size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
        />
      ))}
      {showCount && count > 0 && (
        <span className="text-xs text-velmora-muted ml-1">({count})</span>
      )}
    </div>
  );
};

export default StarRating;
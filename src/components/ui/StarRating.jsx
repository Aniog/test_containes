import { Star } from 'lucide-react';

const StarRating = ({ rating, size = 14 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-${size / 4} h-${size / 4} ${
            star <= Math.round(rating)
              ? 'fill-[#C9A96E] text-[#C9A96E]'
              : 'fill-none text-[#D4CFC8]'
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
};

export default StarRating;

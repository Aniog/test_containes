import { Star } from "lucide-react";

const StarRating = ({ rating, reviewCount, size = 14 }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={
            star <= Math.round(rating)
              ? "fill-amber-500 text-amber-500"
              : "text-stone-300"
          }
        />
      ))}
    </div>
    {reviewCount !== undefined && (
      <span className="text-xs text-stone-500">({reviewCount})</span>
    )}
  </div>
);

export default StarRating;

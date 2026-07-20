import { Star } from "lucide-react";

const RatingStars = ({ rating = 5, reviewCount, centered = false }) => (
  <div
    className={`flex items-center gap-2 text-sm text-stone-600 ${
      centered ? "justify-center" : ""
    }`}
  >
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current"
          strokeWidth={1.5}
        />
      ))}
    </div>
    <span className="font-medium text-stone-700">{rating.toFixed(1)}</span>
    {reviewCount ? <span>({reviewCount})</span> : null}
  </div>
);

export default RatingStars;

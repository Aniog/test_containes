import { Star } from "lucide-react";

export default function StarRating({ rating, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-velmora-espresso">
      <div className="flex text-velmora-gold" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={`${compact ? "h-3.5 w-3.5" : "h-4 w-4"} fill-current`} />
        ))}
      </div>
      {reviews !== undefined && reviews !== "" && (
        <span className={`${compact ? "text-xs" : "text-sm"} text-velmora-cocoa`}>
          {rating} ({reviews})
        </span>
      )}
    </div>
  );
}

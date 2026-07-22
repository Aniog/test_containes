import { Star } from "lucide-react";

export function StarRating({ rating, size = 14 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < fullStars;
        const isHalf = !isFull && i === fullStars && hasHalf;
        return (
          <Star
            key={i}
            size={size}
            className={`${isFull || isHalf ? "fill-velmora-gold text-velmora-gold" : "fill-transparent text-velmora-stone"}`}
            style={{
              clipPath: isHalf ? "inset(0 50% 0 0)" : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

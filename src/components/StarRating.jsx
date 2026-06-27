import { Star } from "lucide-react";

export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const fill = i < full ? 1 : i === full ? partial : 0;
    stars.push(
      <div key={i} className="relative inline-block" style={{ width: size, height: size }}>
        <Star size={size} className="absolute text-warm-gray-light" strokeWidth={1.5} />
        <div
          className="absolute overflow-hidden"
          style={{ width: `${fill * 100}%` }}
        >
          <Star size={size} className="text-accent fill-accent" strokeWidth={1.5} />
        </div>
      </div>
    );
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

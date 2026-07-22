import { Star } from "lucide-react";

export default function Stars({ value = 5, size = 14 }) {
  return (
    <div className="inline-flex items-center gap-0.5 text-accent" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-[14px] h-[14px]"
          strokeWidth={1.4}
          fill={i < Math.round(value) ? "currentColor" : "transparent"}
        />
      ))}
    </div>
  );
}

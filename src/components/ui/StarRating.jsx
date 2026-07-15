import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, size = 14 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={i < rating ? 'fill-[#C5A46E] text-[#C5A46E]' : 'text-[#E8E4DE]'} 
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

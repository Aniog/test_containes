import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ quote, name, rating = 5 }) => {
  return (
    <div className="text-center px-4">
      <div className="flex justify-center gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#B8976A] text-[#B8976A]" />
        ))}
      </div>
      <p className="text-[#2C2823] text-sm leading-relaxed mb-4 font-light">
        "{quote}"
      </p>
      <p className="text-xs tracking-[0.1em] text-[#6B6359]">{name}</p>
    </div>
  );
};

export default Testimonial;

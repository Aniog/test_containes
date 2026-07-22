import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border border-stone-200 p-6 sm:p-8 rounded-sm">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-stone-700">"{testimonial.text}"</p>
      <p className="mt-4 text-xs uppercase tracking-[0.15em] text-stone-500">
        {testimonial.name}
      </p>
    </div>
  );
};

export default TestimonialCard;

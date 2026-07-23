import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="rounded-2xl border border-brand-line bg-white p-6 md:p-8 shadow-sm">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
        ))}
      </div>
      <p className="mt-4 font-serif text-lg text-brand-ink leading-relaxed">"{testimonial.text}"</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;

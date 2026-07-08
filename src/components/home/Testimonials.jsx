import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality is unreal for the price. I wear my Golden Sphere Huggies every single day.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'Beautiful packaging and even more beautiful jewelry. The Amber Lace Earrings are my new favorite.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire T.',
    text: 'I bought the Royal Heirloom Set as a gift and it felt so luxurious. Will definitely order again.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-surface border-y border-brand-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center">
              <div className="flex gap-1 text-brand-gold mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-brand-ink leading-relaxed italic">"{testimonial.text}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

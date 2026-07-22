import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    text: 'The Golden Sphere Huggies are my everyday staple. They feel luxurious but not fussy.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya S.',
    text: 'I bought the necklace for my birthday and I have not taken it off since. The quality is unreal.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire D.',
    text: 'Packaging was beautiful and shipping was fast. Perfect gift for my best friend.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-accent mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="p-6 md:p-8 rounded-sm border border-border bg-background">
              <div className="flex items-center gap-1 text-accent mb-4">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm md:text-base text-ink leading-relaxed mb-6">“{item.text}”</p>
              <p className="text-xs tracking-widest uppercase text-ink-secondary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

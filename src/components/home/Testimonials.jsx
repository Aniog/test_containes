import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Alexandra M.',
    text: 'The Golden Sphere Huggies are my new everyday staple. Lightweight, polished, and they catch the light beautifully.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya S.',
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone felt luxurious. The set is even more beautiful in person.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Elena R.',
    text: 'Finally jewelry that feels premium without the markup. The Amber Lace Earrings are delicate but durable.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="rounded-sm border border-brand-line bg-white p-6">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-ink leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-muted">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

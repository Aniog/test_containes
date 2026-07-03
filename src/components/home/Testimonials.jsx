import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Sophia M.', text: 'The Golden Sphere Huggies are my everyday staple. Lightweight and so chic.', rating: 5 },
  { id: 2, name: 'Elena R.', text: 'I gifted the Royal Heirloom Set and the packaging alone felt luxurious. She loved it.', rating: 5 },
  { id: 3, name: 'Claire T.', text: 'Finally jewelry that looks expensive but doesn’t break the bank. The Amber Lace Earrings are stunning.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="text-center">
          <p className="section-subtitle">Reviews</p>
          <h2 className="section-title mt-2">What Our Clients Say</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

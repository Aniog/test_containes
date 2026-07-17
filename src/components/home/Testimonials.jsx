import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday staple. They feel substantial but not heavy, and the gold tone is beautiful.',
  },
  {
    id: 2,
    name: 'Elena R.',
    rating: 5,
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone felt luxurious. The necklace is even more delicate in person.',
  },
  {
    id: 3,
    name: 'Claire T.',
    rating: 5,
    text: 'Finally jewelry that looks expensive but does not break the bank. The Amber Lace Earrings get compliments every time I wear them.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Reviews</p>
          <h2 className="section-title mt-2">What Our Customers Say</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl bg-brand-surface p-8 shadow-soft">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

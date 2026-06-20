import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The Golden Sphere Huggies are my everyday go-to. Lightweight, elegant, and they still look brand new after months of wear.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone felt luxurious. The quality is outstanding for the price.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ava L.',
    text: 'Finally jewelry that feels premium but doesn’t break the bank. The Amber Lace Earrings get compliments every time I wear them.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brand-sand/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-center text-xs uppercase tracking-widest text-brand-gold">Reviews</p>
        <h2 className="section-heading mt-2 text-center">What Our Customers Say</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-sm border border-brand-border bg-brand-cream p-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-brand-gold">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <span key={idx} className="text-sm">★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-black/80">“{item.text}”</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

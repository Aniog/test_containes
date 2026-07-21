import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sophia M.', text: 'The Golden Sphere Huggies are my new everyday staple. Lightweight and so pretty.' },
  { name: 'Emma R.', text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone felt luxurious.' },
  { name: 'Olivia T.', text: 'Finally jewelry that looks expensive but doesn’t break the bank. The quality is unreal.' },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <h2 className="font-serif text-3xl md:text-4xl text-ink">What our customers say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

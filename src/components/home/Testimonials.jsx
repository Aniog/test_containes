import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor R.',
    text: 'The Golden Sphere Huggies are even more beautiful in person. The weight is perfect and they look so expensive.',
    rating: 5,
  },
  {
    name: 'Sophia M.',
    text: 'Velmora has become my go-to for gifts. The packaging is stunning and the quality never disappoints.',
    rating: 5,
  },
  {
    name: 'Isabella K.',
    text: 'I haven’t taken off my Amber Lace Earrings since they arrived. They are truly my new everyday signature.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-bold">Kind Words</h2>
        <h3 className="text-4xl font-serif italic text-muted-foreground/40">Trusted by women worldwide</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, idx) => (
          <div key={idx} className="flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-accent" />
              ))}
            </div>
            <p className="text-lg font-serif italic mb-8 flex-1">"{t.text}"</p>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-accent">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
